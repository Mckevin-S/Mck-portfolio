export type Stat = {
  label: string;
  value: string;
};

export type Profile = {
  name: string;
  firstName: string;
  role: string;
  intro: string;
  bio: string;
  location: string;
  availability: string;
  email: string;
  stats: Stat[];
};
