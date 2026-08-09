import React from "react"

export default function Badge({ children }: { children: React.ReactNode }) {
  return <span style={{ padding: "0.2rem 0.5rem", borderRadius: 6, background: "#eee" }}>{children}</span>
}
