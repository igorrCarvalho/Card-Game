import { create } from 'zustand'
import { getCardsFromDB, saveCardToDB } from '../api/index';	

type dataType = {
    name: string;
    description: string;
    rarity: string;
    damageType: string;
    armorType: string;
    superCard: boolean;
    damage: number;
    hp: number;
    armor: number;
    image: string;
};

type CardStore = {
    cards: Array<dataType>;
    saveCard: (data: dataType) => void;
    getCards: () => Promise<Array<dataType>>;
};

const useCardStore = create<CardStore>((get, set) => ({
    cards: [],
    saveCard: async (data: dataType) => {
        await saveCardToDB(data);
        await useCardStore.getState().getCards();
    },
    getCards: async () => {
        const cards = await getCardsFromDB();
        useCardStore.setState({ cards });
        return cards;
    },
}))

export default useCardStore;
