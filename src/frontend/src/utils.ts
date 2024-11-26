export function truncateString(input: string, maxLength: number = 70): string {
    if (input.length > maxLength) {
      return input.slice(0, maxLength) + "...";
    }
    return input;
}

type buffs = {
  hp: string;
  damage: string;
  armor: string;
}

type buffsReturn = {
  hp: number;
  damage: number;
  armor: number;
};

export function calculateBuffs({ hp, damage, armor }: buffs): buffsReturn {
  const buff = {
    hp: Number(hp) === 0 ? 0 : Math.floor(Number(hp) * 1.2),
    damage: Number(damage) === 0 ? 0 : Math.floor(Number(damage) * 1.2),
    armor: Number(armor) === 0 ? 0 : Math.floor(Number(armor) * 1.2),
  };
    return buff;
}
