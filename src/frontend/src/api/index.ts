import axios from "axios";

const defaultUrl = "http://localhost:3001/api/v1/";

export function saveCardToDB({ name, description, rarity, damageType, armorType, superCard, damage, hp, armor, image }) {
  return axios.post(`${defaultUrl}cards`, { name, description, rarity, damageType, armorType, superCard, damage, hp, armor, image });
}