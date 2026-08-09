"use client"

import { useEffect, useRef } from "react"

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

float grid(vec2 uv, float spacing) {
    vec2 g = abs(mod(uv, spacing) - spacing * 0.5);
    return smoothstep(0.01, 0.0, min(g.x, g.y));
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    vec2 mouse = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    
    vec3 color = vec3(0.03, 0.03, 0.06); 
    
    float g1 = grid(uv * 4.0 + vec2(u_time * 0.05), 1.0);
    float g2 = grid(uv * 8.0 - vec2(u_time * 0.08), 1.0);
    
    color += g1 * vec3(0.08, 0.08, 0.18);
    color += g2 * vec3(0.04, 0.04, 0.12);
    
    float dist = length(uv - mouse);
    float glow = smoothstep(0.5, 0.0, dist) * 0.45;
    color += glow * vec3(0.39, 0.4, 0.95);
    
    for(float i = 0.0; i < 5.0; i++) {
        vec2 p = vec2(sin(u_time * 0.2 + i * 1.5), cos(u_time * 0.3 + i * 2.1)) * 0.4;
        float d = length(uv - p);
        float circle = smoothstep(0.025, 0.0, d);
        color += circle * vec3(0.39, 0.4, 0.95) * 0.9;
        
        for(float j = 0.0; j < 5.0; j++) {
            if(i != j) {
                vec2 p2 = vec2(sin(u_time * 0.2 + j * 1.5), cos(u_time * 0.3 + j * 2.1)) * 0.4;
                vec2 pa = uv - p;
                vec2 ba = p2 - p;
                float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                float lineDist = length(pa - ba * h);
                color += smoothstep(0.006, 0.0, lineDist) * 0.12 * vec3(0.39, 0.4, 0.95);
            }
        }
    }

    gl_FragColor = vec4(color, 1.0);
}
`

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const syncSize = () => {
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      mouseRef.current = { x: w / 2, y: h / 2 }
    }

    let ro: ResizeObserver | undefined
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(syncSize)
      ro.observe(canvas)
    }
    syncSize()

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    if (!gl) return

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, VERTEX_SHADER))
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    const pos = gl.getAttribLocation(prog, "a_position")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, "u_time")
    const uRes = gl.getUniformLocation(prog, "u_resolution")
    const uMouse = gl.getUniformLocation(prog, "u_mouse")

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width
        const ny = 1.0 - (e.clientY - rect.top) / rect.height
        mouseRef.current = {
          x: nx * canvas.width,
          y: ny * canvas.height,
        }
      }
    }
    window.addEventListener("mousemove", onMouseMove)

    const render = (t: number) => {
      if (typeof ResizeObserver === "undefined") syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, t * 0.001)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      if (uMouse)
        gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("mousemove", onMouseMove)
      ro?.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ display: "block", zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
