import axios from "axios";

const defaultUrl = "http://localhost:3001/api/v1/";

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
}

type gameType = {
    isActive: boolean;
    cardsFighting: string;
    playerAliveCards: string;
    IAAliveCards: string;
    playerDeadCards: string;
    IADeadCards: string;
}

export async function saveCardToDB({ name, description, rarity, damageType, armorType, superCard, damage, hp, armor, image }: dataType) {
  const response = await axios.post(`${defaultUrl}cards/`, { name, description, rarity, damageType, armorType, superCard, damage, hp, armor, image });
  return response.data;
}

export async function getCardsFromDB(): Promise<dataType[]> {
    const response = await axios.get(`${defaultUrl}cards/`);
    return response.data;
};

export async function startAGame(game: gameType) {
    const response = await axios.post(`${defaultUrl}games`, game);
    return response.data;
}

export async function getDefaultRandomCards() {
    const response = await axios.get(`${defaultUrl}cards/default`);
    return response.data;
}

export async function getGameById(id: number) {
    const response = await axios.get(`${defaultUrl}games/${id}`);
    return response.data;
}
