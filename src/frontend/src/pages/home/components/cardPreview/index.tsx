import CommonCard from "../../../../components/CardsComponents/commonCard";
import RareCard from "../../../../components/CardsComponents/rareCard";
import SuperCard from "../../../../components/CardsComponents/superCard";
import UltraRareCard from "../../../../components/CardsComponents/ultraRare";
import UnknownCard from "./components/unknownCard";

export type dataType = {
    cardData: {
        name: string;
        description: string;
        damageType: string;
        armorType: string;
        damage: string;
        hp: string;
        armor: string;
        image: string;
        rarity: string;
        superCard: boolean;
    };
}

export default function CardPreview({ cardData }: dataType) {
    const cards = {
        common: CommonCard,
        rare: RareCard,
        ultrarare: UltraRareCard,
        super: SuperCard,
        unknown: UnknownCard,
    }

    let CardToShow = null;

    
    if (cardData.superCard) {
        CardToShow = cards["super"];
    } else {
        CardToShow = cards[cardData.rarity.split(" ").join("").toLowerCase()] ?? cards["unknown"];

    }
    
    return (
        <CardToShow cardData={cardData} />
    );
}