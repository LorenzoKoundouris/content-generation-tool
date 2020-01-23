import { IStatRecord } from "./i-stat-record";

export interface ITipster {
  name: string;
  authorId: string;
  stats: IStatRecord[]
}