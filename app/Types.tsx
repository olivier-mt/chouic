import { PlayerI } from "./Interfaces";

export type player = {
  name: string;
  gender: string;
  preferences: string;
};

export type PlayerArrType = [] | PlayerI[];
