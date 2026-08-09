export type NavKey =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

export type NavItem = {
  href: string;
  key: NavKey;
  index: string;
};

export const navItems: NavItem[] = [
  { href: "#home", key: "home", index: "01" },
  { href: "#about", key: "about", index: "02" },
  { href: "#skills", key: "skills", index: "03" },
  { href: "#experience", key: "experience", index: "04" },
  { href: "#projects", key: "projects", index: "05" },
  { href: "#contact", key: "contact", index: "06" },
];
