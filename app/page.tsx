import { cookies } from "next/headers";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { getLang, LANG_COOKIE } from "../lib/i18n";

export default async function Page() {
  const cookieStore = await cookies();
  const lang = getLang(cookieStore.get(LANG_COOKIE)?.value);

  return (
    <main className="relative">
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
