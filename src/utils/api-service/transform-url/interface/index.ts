import { IListUrl } from "./list-url";
import { IStatistics } from "./statistics";

export interface IGetStatistics {
  list: IListUrl[];
  statistics: IStatistics[];
}

export interface IPostGenerate {
  originalUrl: string;
  shortUrl: string;
  userId: number;
  createdby: any;
  createdtime: string;
  id: number;
}

export interface IGetDetailShort {
    id: number
    originalUrl: string
    shortUrl: string
    userId: number
    statistics: IStatistics[]
}
