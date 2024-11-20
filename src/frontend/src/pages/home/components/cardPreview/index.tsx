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
    return (
        <UnknownCard cardData={cardData} />
    );
}