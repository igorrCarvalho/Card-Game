import CommonCard from "../../../../components/CardsComponents/commonCard";
import RareCard from "../../../../components/CardsComponents/rareCard";
import UltraRareCard from "../../../../components/CardsComponents/ultraRare";
import UnknownCard from "./components/unknownCard";

export type dataType = {
    cardData: {
        name: string;
        description: string;
        damageType: string;
        armorType: string;
        damage: string;
        life: string;
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
        unknown: UnknownCard,
    }

    console.log(cardData.rarity.split(" ").join("").toLowerCase());

    const CardToShow = cards[cardData.rarity.split(" ").join("").toLowerCase()] ?? cards["unknown"];
    return (
        <CardToShow cardData={cardData} />
    );
}