import React, { createContext, useContext, useState } from "react";
import { PlayerArrType, player } from "./Types";

export type contextType = {
  playersArr: [] | player[];
  setPlayersArr: React.Dispatch<React.SetStateAction<PlayerArrType>> | null;
};

export const PlayersContext = createContext<contextType>({
  playersArr: [],
  setPlayersArr: null,
});
