import { Axe, Heart, ShieldHalf, ShieldPlus, Star, WandSparkles } from "lucide-react";
import { truncateString } from "../../utils";
import { dataType } from "../../pages/home/components/cardPreview";
import { cardDataType, JSXTypesObjRenderer } from "./commonCard";
import useCardStore from "../../stores/cardStore";
import { useEffect, useState } from "react";

export default function UltraRareCard({ cardData, reactKey, showroom }: cardDataType) {
    const { rarity, name, description, hp, damageType, armorType, armor, damage, superCard, image } = cardData;
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const selectCard = useCardStore((state) => state.selectCard);
    const selectedCards = useCardStore((state) => state.selectedCards);
    const unselectCard = useCardStore((state) => state.unselectCard);
    const canShowOverall = armor && damage && hp;
    const overall = Math.round((Number(armor) + Number(hp) + Number(damage)) / 3);
    const damageJSX: JSXTypesObjRenderer = {
        magic: {
            jsx: WandSparkles,
            css: "w-4 h-4 stroke-violet-600",
        },
        physical: {
            jsx: Axe,
            css: "w-4 h-4 stroke-amber-600",
        },
    };
    const armorJSX: JSXTypesObjRenderer = {
        magic: {
            jsx: ShieldPlus,
            css: "w-4 h-4 stroke-violet-600",
        },
        physical: {
            jsx: ShieldHalf,
            css: "w-4 h-4 stroke-amber-300",
        },
    };

    const DamageToRender = damageJSX[damageType.toLowerCase()]?.jsx ?? damageJSX["physical"].jsx;
    const ArmorToRender = armorJSX[armorType.toLowerCase()]?.jsx ?? armorJSX["physical"].jsx;
    const DamageStyleToRender = damageJSX[damageType.toLowerCase()]?.css ?? damageJSX["physical"].css;
    const ArmorStyleToRender = armorJSX[armorType.toLowerCase()]?.css ?? armorJSX["physical"].css;

    useEffect(() => {
        setIsSelected(selectedCards.find((card) => card.id === cardData.id)?.id ? true : false);
    }, [selectedCards, selectCard, unselectCard]);

    return (
        <div
        onClick={() => {
            //@ts-ignore
            if (selectedCards.find((card) => card.id === cardData.id)) {
                return unselectCard(cardData.id);
            }
            //@ts-ignore
            selectCard(cardData);
        }} 
            className={`flex items-center justify-center card-wrapper-ur ${showroom ? `w-60 h-[30em] ${isSelected ? "shadow-2xl" : ""}` : "w-[80%] h-[65%]"} rounded-md cursor-pointer transition-all`}
        >

            <div className=" card-content flex items-center justify-center w-full h-full border border-gray-300 rounded-md bg-purple-50/[0.9]">
                <div className="w-[90%] h-[93%] bg-gradient-to-br from-fuchsia-500 to-fuchsia-800 rounded-md p-3 relative flex flex-col gap-1">
                    <div className="rounded-full h-10 w-10 bg-white border border- flex z-50 items-center justify-center absolute top-0.5 left-0.5">
                        {canShowOverall ? (overall) : "?"}
                    </div>
                    <div className="relative w-full h-48 bg-white rounded-md">
                        <img src={image} className="w-full h-full rounded-md" />
                            <div className="flex absolute bottom-1 w-full">
                                <div className="flex w-full items-center justify-center">
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                </div>
                            </div>
                    </div>
                    <div className="w-full h-8 rounded-md bg-fuchsia-100 flex items-center pl-2 ">
                        {name}
                    </div>
                    <div className="w-full h-16 rounded-md bg-fuchsia-100 pl-2 pr-2 flex items-center">
                        {description.length > 0 ? (
                            <span>
                                {truncateString(description)}
                            </span>
                        ) : "No information provided."}
                    </div>
                    <div className="w-full h-32 rounded-md bg-fuchsia-100 flex flex-col justify-center pl-2">
                        <div className="w-full flex items-center gap-1">
                        <Heart className="w-4 h-4 stroke-emerald-400" />
                        -
                        <span>
                            {hp}
                        </span>
                        </div>
                        <div className="w-full flex items-center gap-1">
                            {<DamageToRender className={DamageStyleToRender} />}
                            -
                            <span>
                                {damage}
                            </span>
                        </div>
                        <div className="w-full flex items-center gap-1">
                            {<ArmorToRender className={ArmorStyleToRender} />}
                        -
                        <span>
                            {armor}
                        </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}