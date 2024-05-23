export interface Country {
  name: {
    common: string;
    nativeName: Record<string, { common: string; official: string }>;
  };
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borders: string[];
}
