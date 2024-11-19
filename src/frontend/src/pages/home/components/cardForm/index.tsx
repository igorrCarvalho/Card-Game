import React, { useState } from "react";
import { Input } from "../../../../components/ui/Input";
import { Label } from "../../../../components/ui/Label";
import DropdownComponent from "../../../../components/DropdownComponent";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    damageType: "Magic",
    armorType: "Physical",
    damage: "",
    life: "",
    armor: "",
    image: "",
    rarity: "Raro",
    superCard: false,
  });


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
        />
      </div>

      {/* Armor Type */}
      <div>
        <Label>
            Armor Type:
            <select
            name="armorType"
            value={formData.armorType}
            onChange={handleChange}
            >
            <option value="Physical">Physical</option>
            <option value="Magic">Magic</option>
            </select>
        </Label>

      </div>

      {/* Damage */}
      <div>
        <Label>
            Damage:
            <Input
            type="number"
            name="damage"
            value={formData.damage}
            onChange={handleChange}
            />
        </Label>
      </div>

      {/* Life */}
      <div>
        <Label>
            Life:
            <Input
            type="number"
            name="life"
            value={formData.life}
            onChange={handleChange}
            />
        </Label>
      </div>

      {/* Armor */}
      <div>
        <Label>
            Armor:
            <Input
            type="number"
            name="armor"
            value={formData.armor}
            onChange={handleChange}
            />
        </Label>
      </div>

      {/* Image */}
      <div>
        <Label>
            Image URL:
            <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            />
        </Label>
      </div>

      {/* Rarity */}
      <div>
        <Label>
            Rarity:
            <select
            name="rarity"
            value={formData.rarity}
            onChange={handleChange}
            >
            <option value="Raro">Raro</option>
            <option value="Super Raro">Super Raro</option>
            <option value="Normal">Normal</option>
            </select>
        </Label>
      </div>

      {/* Super Card */}
      <div>
        <Label>
            Super Card:
            <Input
            type="checkbox"
            name="superCard"
            checked={formData.superCard}
            onChange={handleChange}
            />
        </Label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Form;
