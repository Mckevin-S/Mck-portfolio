"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import ContactForm from "../contact/ContactForm";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "../ui/icons";
import { social } from "../../data/social";
import { getDictionary } from "../../lib/dictionary";
import { useLang } from "../../lib/language-context";

export default function Contact() {
  const { lang } = useLang();
  const dict = getDictionary(lang);

  return (
    <section id="contact" className="relative z-10 scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <SectionTitle
          index="05"
          label={dict.contact.label}
          title={dict.contact.title}
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              {dict.contact.heading}
            </h3>
            <p className="mt-4 max-w-[480px] leading-relaxed text-muted">
              {dict.contact.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={`mailto:${social.email}`}>
                <MailIcon className="h-4 w-4" /> {social.email}
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-primary"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-primary"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${social.email}`}
                aria-label="Email"
                className="text-muted transition-colors hover:text-primary"
              >
                <MailIcon className="h-5 w-5" />
              </a>
              <span className="ml-auto hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
                {dict.contact.replyTime}
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
