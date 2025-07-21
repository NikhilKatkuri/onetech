// for cli work flow
interface TechConfig {
  base: string;
  lang: string;
  template: string;
  notes?: string;
}
// for entries
type TechEntry = {
  base: string;
  lang: string[] | string;
  note?: string;
  templates: string[];
};

export type { TechEntry, TechConfig };
