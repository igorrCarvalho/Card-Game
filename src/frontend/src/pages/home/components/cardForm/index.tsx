import React, { useState } from "react";
import { Input } from "../../../../components/ui/Input";
import { Label } from "../../../../components/ui/Label";
import DropdownComponent from "../../../../components/DropdownComponent";
import { Checkbox } from "../../../../components/ui/Checkbox";
import { Button } from "../../../../components/ui/Button";
import { CheckedState } from "@radix-ui/react-checkbox";

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
    setFormData: (state: dataType | (() => dataType)) => void;
};

function Form({ formData, setFormData }: formDataType) {

  function handleCheckbox(checked: CheckedState, name: string) {
    if (checked === "indeterminate") return;
    setFormData({
      ...formData,
      [name]: checked,
    })
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement; // Type assertion for `checked`
  
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Name */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>
            Name:
        </Label>
        <Input
        type="text"
        name="name"
        className=""
        value={formData.name}
        onChange={handleChange}
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Description:</Label>
        <Input
        name="description"
        value={formData.description}
        onChange={handleChange}
        />
      </div>

      {/* Damage Type */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Damage Type:</Label>
        <DropdownComponent
          options={
            [{value: "Magic", label: "Magic"}, {value: "Physical", label: "Physical"}]
          }
          defaultText="Damage Type"
        />
      </div>

      {/* Armor Type */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Armor Type:</Label>
        <DropdownComponent
            options={
                [{value: "Magic", label: "Magic"}, {value: "Physical", label: "Physical"}]
            }
            defaultText="Armor Type"
        />
      </div>

      {/* Super Card */}
      <div className="flex gap-2">
        <Checkbox
            name="superCard"
            checked={formData.superCard}
            onCheckedChange={(c) => handleCheckbox(c, "superCard")}
        />
        <Label>Super Card:</Label>
      </div>
      {/* Damage */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Damage:</Label>
        <Input
            type="number"
            name="damage"
            value={formData.damage}
            onChange={handleChange}
        />
      </div>

      {/* Life */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Life:</Label>
        <Input
            type="number"
            name="life"
            value={formData.life}
            onChange={handleChange}
        />
      </div>

      {/* Armor */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Armor:</Label>
        <Input
            type="number"
            name="armor"
            value={formData.armor}
            onChange={handleChange}
        />
      </div>

      {/* Image */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Image URL:</Label>
        <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
        />
      </div>

      {/* Rarity */}
      <div className="flex flex-col gap-2 w-[40%]">
        <Label>Rarity:</Label>
        <DropdownComponent
            options={
                [{value: "Ultra Rare", label: "Ultra Rare"}, {value: "Rare", label: "Rare"}, {value: "Common", label: "Common"}]
            }
            defaultText="Rarity"
        />
      </div>
      <div>
        <Button className="" variant={"outline"}>Save Card</Button>

      </div>
    </div>
  );
};

export default Form;
