import { create } from 'zustand'
import { getCardsFromDB, saveCardToDB } from '../api/index';	

type cardType = {
    id: number;
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
    unselectCard: (id: number) => void;
    selectCard: (card: cardType) => void;
    selectedCards: Array<cardType>;
    cards: Array<cardType>;
    saveCard: (data: cardType) => void;
    getCards: () => Promise<Array<cardType>>;
};

const useCardStore = create<CardStore>((get, set) => ({
    selectCard: (card: cardType) => {
        const selectedCards = useCardStore.getState().selectedCards;
        if (selectedCards.length === 4) {
            selectedCards.pop();
            useCardStore.setState({ selectedCards: [
                ...selectedCards,
                card
            ] });
            return;
        }
        const newSelectedCards = [...selectedCards, card];
        useCardStore.setState({ selectedCards: newSelectedCards });
    },
    unselectCard: (id: number) => {
        const selectedCards = useCardStore.getState().selectedCards;
        const newSelectedCards = selectedCards.filter((card) => card.id !== id);
        useCardStore.setState({ selectedCards: newSelectedCards });
    },
    selectedCards: [],
    cards: [],
    saveCard: async (data: cardType) => {
        await saveCardToDB(data);
        await useCardStore.getState().getCards();
    },
    //@ts-ignore
    getCards: async () => {
        const cards = await getCardsFromDB();
        //@ts-ignore
        useCardStore.setState({ cards });
        return cards;
    },
}))

export default useCardStore;
