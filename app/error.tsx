"use client";
import React from "react";
import { Container, Button } from "../components/ui";

export default function Error({ error }: { error: Error }) {
  console.error(error);
  return (
    <section className="relative z-10 flex min-h-[70vh] items-center py-20">
      <Container>
        <p className="font-mono text-sm text-error">✕ ERREUR</p>
        <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl">
          Une erreur est survenue
        </h1>
        <p className="mt-3 max-w-md text-muted">
          Quelque chose s&apos;est mal passé. Revenez à l&apos;accueil et
          réessayez.
        </p>
        <div className="mt-8">
          <Button href="/">Retour à l&apos;accueil</Button>
        </div>
      </Container>
    </section>
  );
}
