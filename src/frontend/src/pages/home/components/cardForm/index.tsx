import React, { useState } from "react";
import { Input } from "../../../../components/ui/Input";
import { Label } from "../../../../components/ui/Label";
import DropdownComponent from "../../../../components/DropdownComponent";
import { Checkbox } from "../../../../components/ui/Checkbox";
import { Button } from "../../../../components/ui/Button";
import { CheckedState } from "@radix-ui/react-checkbox";
import { validateHeaderValue } from "http";
import { saveCardToDB } from "../../../../api";
import { CARD_FORM_INITIAL_STATE } from "../../../../constants";
import useCardStore from "../../../../stores/cardStore";

type dataType = {
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
}

type formDataType = {
    formData: dataType;
    setFormData: (state: dataType | ((state: dataType) => dataType)) => void;
};

function Form({ formData, setFormData }: formDataType) {
  const saveCard = useCardStore((state) => state.saveCard);
  const maxStatsObj = {
      common: 150,
      rare: 250,
      ultrarare: 350,
  };

  const [isBackspace, setWasBackspaced] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key.toLowerCase() === "backspace") {
      setWasBackspaced(true); // Track that Backspace was pressed
    } else {
      setWasBackspaced(false);
    }
  };

  function handleCheckbox(checked: CheckedState, name: string) {
    if (checked === "indeterminate") return;
    setFormData({
      ...formData,
      [name]: checked,
    })
  };

  async function handleSaveCard() {
    const { name, description, rarity, damageType, armorType, superCard, damage: attack, hp: life, armor: defense, image } = formData;
    const damage = Number(attack);
    const hp = Number(life);
    const armor = Number(defense);
    const data = { name, description, rarity, damageType, armorType, superCard, damage, hp, armor, image };
    //@ts-ignore
    await saveCard(data);
    setFormData(CARD_FORM_INITIAL_STATE)
  }

  const currentStatsLimit = maxStatsObj[formData.rarity.split(" ").join("").toLowerCase()];
  const statsSum = Number(formData.armor) + Number(formData.damage) + Number(formData.hp)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement; // Type assertion for `checked`
    const statInput = name === "hp" || name === "armor" || name === "damage";
    if (statInput && !isBackspace) {
        if (Number(value) > currentStatsLimit || statsSum > currentStatsLimit || statsSum === currentStatsLimit || (statsSum === currentStatsLimit && Number(value) === 0)) {
            return;
        }
    }
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-2">
            <span className="text-xl bold text-fuchsia-400">Identity</span>
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Name:</Label>
            <Input
            type="text"
            name="name"
            className=""
            value={formData.name}
            onChange={handleChange}
            />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Description:</Label>
            <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            />
        </div>
      </div>

      <div className="flex flex-col gap-2">
      <span className="text-xl bold text-fuchsia-400">Basic Definitions</span>
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Rarity:</Label>
            <DropdownComponent
                setValue={setFormData}
                value={formData.rarity}
                name="rarity"
                options={
                    [{value: "Ultra Rare", label: "Ultra Rare"}, {value: "Rare", label: "Rare"}, {value: "Common", label: "Common"}]
                }
                defaultText="Rarity"
            />
        </div>

        {/* Damage Type */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Damage Type:</Label>
            <DropdownComponent
            setValue={setFormData}
            value={formData.damageType}
            name={"damageType"}
            options={
                [{value: "Magic", label: "Magic"}, {value: "Physical", label: "Physical"}]
            }
            defaultText="Damage Type"
            />
        </div>

        {/* Armor Type */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Armor Type:</Label>
            <DropdownComponent
                setValue={setFormData}
                value={formData.armorType}
                name="armorType"
                options={
                    [{value: "Magic", label: "Magic"}, {value: "Physical", label: "Physical"}]
                }
                defaultText="Armor Type"
            />
        </div>
      </div>

      {/* Rarity */}

      {/* Super Card */}
      <div className="flex flex-col gap-2">
        <span className="text-xl bold text-fuchsia-400">Stats</span>
        <div className="flex gap-2">
            <Checkbox
                name="superCard"
                checked={formData.superCard}
                onCheckedChange={(c) => handleCheckbox(c, "superCard")}
            />
            <Label>Super Card</Label>
        </div>
        {/* Damage */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Damage:</Label>
            <Input
                disabled={formData.rarity === ""}
                type="number"
                name="damage"
                value={formData.damage}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>

        {/* Life */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>HP:</Label>
            <Input
                disabled={formData.rarity === ""}
                type="number"
                name="hp"
                value={formData.hp}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>

        {/* Armor */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Armor:</Label>
            <Input
                disabled={formData.rarity === ""}
                type="number"
                name="armor"
                value={formData.armor}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
        <span className="text-xl bold text-fuchsia-400">
            {formData.rarity === "" ? "Select a rarity to set the stats" : `Points to use: ${Math.round(currentStatsLimit - statsSum)}`}
        </span>
      </div>

      {/* Image */}
      <div className="flex flex-col gap-2 w-[80%]">
        <Label>Image URL:</Label>
        <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
        />
      </div>

      <div>
        <Button className="" onClick={handleSaveCard} variant={"outline"}>Save Card</Button>

      </div>
    </div>
  );
};

export default Form;
