"use client"
import React from "react"

export default function Error({ error }: { error: Error }) {
  console.error(error)
  return <div>Une erreur est survenue.</div>
}
