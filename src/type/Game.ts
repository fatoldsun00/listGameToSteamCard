export interface Game {
  appid?: number;
  logo?: string;
  icon?: string;
  name?: string;
  searchedName: string;
  info?: unknown;
  notFound?: boolean;
}
