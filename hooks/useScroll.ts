import { useEffect } from "react"

export default function useScroll(cb: () => void) {
  useEffect(() => {
    window.addEventListener("scroll", cb)
    return () => window.removeEventListener("scroll", cb)
  }, [cb])
}
