import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../api";
import CommonCard, { cardDataType } from "../../components/CardsComponents/commonCard";
import { parse } from "path";
import RareCard from "../../components/CardsComponents/rareCard";
import UltraRareCard from "../../components/CardsComponents/ultraRare";
import SuperCard from "../../components/CardsComponents/superCard";
import InactiveGame from "./components/inactiveGame";

export default function Game() {
  const id = useParams().id;
  const [gameData, setGameData] = useState(null);

  function parseCards(gameDataa) {
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

  function CardToRender({ reactkey, cardData }): JSX.Element {
    const cards = {
        common: CommonCard,
        rare: RareCard,
        ultrarare: UltraRareCard,
        super: SuperCard,
    }
    let CardToShow = null;


    if (cardData.superCard) {
        CardToShow = cards["super"];
    } else {
        CardToShow = cards[cardData.rarity.split(" ").join("").toLowerCase()];
    }
    return (
        <CardToShow cardData={cardData} reactKey={reactkey} showroom={true}  />
    );

}
  
  useEffect(() => {
    getGameById(Number(id)).then((game) =>  parseCards(game));
  }, [id]);

  console.log(gameData);


  return (
    gameData?.isActive ? (
      <div className="w-full h-full">

      </div>
    ) : (
      <InactiveGame
        gameData={gameData}
        CardToRender={CardToRender}
      />
    )
  );
}