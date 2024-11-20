import React, { useState } from "react";
import { Input } from "../../../../components/ui/Input";
import { Label } from "../../../../components/ui/Label";
import DropdownComponent from "../../../../components/DropdownComponent";
import { Checkbox } from "../../../../components/ui/Checkbox";
import { Button } from "../../../../components/ui/Button";
import { CheckedState } from "@radix-ui/react-checkbox";
import { validateHeaderValue } from "http";

type dataType = {
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
}

type formDataType = {
    formData: dataType;
    setFormData: (state: dataType | ((state: dataType) => dataType)) => void;
};

function Form({ formData, setFormData }: formDataType) {
    const maxStatsObj = {
        common: 150,
        rare: 250,
        ultrarare: 350,
    };

  function handleCheckbox(checked: CheckedState, name: string) {
    if (checked === "indeterminate") return;
    setFormData({
      ...formData,
      [name]: checked,
    })
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement; // Type assertion for `checked`
    const statInput = name === "life" || name === "armor" || name === "damage";
    const nameToUse = formData.rarity.toLowerCase().trim();
    console.log(statInput)
    console.log(nameToUse)
    if (statInput) {
        const statsSum = Number(formData.armor) + Number(formData.damage) + Number(formData.life)
        if (statsSum + Number(value) > Number(maxStatsObj[nameToUse])) {
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
                type="number"
                name="damage"
                value={formData.damage}
                onChange={handleChange}
            />
        </div>

        {/* Life */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>HP:</Label>
            <Input
                type="number"
                name="life"
                value={formData.life}
                onChange={handleChange}
            />
        </div>

        {/* Armor */}
        <div className="flex flex-col gap-2 w-[80%]">
            <Label>Armor:</Label>
            <Input
                type="number"
                name="armor"
                value={formData.armor}
                onChange={handleChange}
            />
        </div>
        <span className="text-xl bold text-fuchsia-400">Points to use: {Math.round(maxStatsObj[formData.rarity.toLowerCase().trim()] - (Number(formData.armor) + Number(formData.damage) + Number(formData.life)))}</span>
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
        <Button className="" variant={"outline"}>Save Card</Button>

      </div>
    </div>
  );
};

export default Form;
