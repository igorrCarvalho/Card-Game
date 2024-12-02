import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../api";
import { cardDataType } from "../../components/CardsComponents/commonCard";
import { parse } from "path";

type gameDataType = {
  id: number;
  isActive: boolean;
  cardsFighting: string;
  playerAliveCards: string;
  IAAliveCards: string
  playerDeadCards: string;
  IADeadCards: string;
}

export default function Game() {
  const id = useParams().id;
  const [gameData, setGameData] = useState<gameDataType | null>(null);

  function parseCards(gameDataa: gameDataType) {
    const { playerAliveCards, IAAliveCards, playerDeadCards, IADeadCards, isActive, id } = gameDataa;
    console.log(playerAliveCards);
    const parsedGameData = {
      isActive,
      id,
      playerAliveCards: typeof playerAliveCards === "string" ? JSON.parse(playerAliveCards) : playerAliveCards,
      IAAliveCards: typeof IAAliveCards === "string" ? JSON.parse(IAAliveCards) : IAAliveCards,
      playerDeadCards: typeof playerDeadCards === "string" ? JSON.parse(playerDeadCards) : playerDeadCards,
      IADeadCards: typeof IADeadCards === "string" ? JSON.parse(IADeadCards) : IADeadCards,
    };
    //@ts-ignore
    setGameData(parsedGameData);
  }
  
  useEffect(() => {
    getGameById(Number(id)).then((game) =>  parseCards(game));
  }, [id]);

  useEffect(() => {
    if (gameData) {
      parseCards(gameData);
    }
  }, [setGameData])
  console.log(gameData)


  return (
    <div className="w-full h-full">

    </div>
  );
}