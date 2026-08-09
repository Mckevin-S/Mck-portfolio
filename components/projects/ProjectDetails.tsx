import React from "react"

export default function ProjectDetails({ title, description }: { title: string; description?: string }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  )
}
