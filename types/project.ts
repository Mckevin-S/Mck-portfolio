export type ProjectCategory =
  | "all"
  | "fullstack"
  | "backend"
  | "data"
  | "devops";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "fullstack" | "backend" | "data" | "devops";
  stack: string[];
  highlights: string[];
  demo?: string;
  source?: string;
  lang: string;
};
