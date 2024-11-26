import { useEffect } from "react";
import useCardStore from "../../stores/cardStore";
import CommonCard from "../CardsComponents/commonCard";
import RareCard from "../CardsComponents/rareCard";
import UltraRareCard from "../CardsComponents/ultraRare";
import SuperCard from "../CardsComponents/superCard";

export default function CardShowroom() {
    const cards = useCardStore((state) => state.cards);
    const getCards = useCardStore((state) => state.getCards);
    const saveCard = useCardStore((state) => state.saveCard);

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
        getCards();
    }, [saveCard, getCards]);

    return (
        <div className="w-[50%] p-5 bg-white">
            <div className="w-full flex items-center justify-center">
                <span className="bold text-2xl">
                    Card Showroom
                </span>
            </div>
            <div className="w-full h-fit flex flex-wrap items-center justify-center gap-5">
                {cards.length > 0 ? cards.map((card, index) => (
                    <CardToRender reactkey={index} cardData={card} />
                )): null}
            </div>
        </div>
    );
}