import { Axe, Heart, LucideProps, ShieldHalf, ShieldPlus, Star, WandSparkles } from "lucide-react";
import { truncateString } from "../../utils";
import { dataType } from "../../pages/home/components/cardPreview";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type JSXTypesRendererDataType = {
    jsx: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    css: string;
}

export type JSXTypesObjRenderer = {
    magic: JSXTypesRendererDataType;
    physical: JSXTypesRendererDataType;
}

type card = {
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
};

export type cardDataType = {
    cardData: card;
    reactKey?: number;
};

export default function CommonCard({ cardData, reactKey }: cardDataType) {
    const { rarity, name, description, hp, damageType, armorType, armor, damage, superCard, image } = cardData;
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

    return (
        <div className=" flex items-center justify-center border border-gray-300 w-[80%] h-[65%] rounded-md">
            <div className="w-[90%] h-[93%] bg-gradient-to-br from-green-600 to-green-700 rounded-md p-3 relative flex flex-col gap-1">
                <div className="rounded-full h-10 w-10 bg-white border border- flex z-50 items-center justify-center absolute top-0.5 left-0.5">
                    {canShowOverall ? (overall) : "?"}
                </div>
                <div className="relative w-full h-48 bg-white rounded-md">
                    <img src={image} className="w-full h-full rounded-md" />
                        <div className="flex absolute bottom-1 w-full">
                            <div className="w-full flex items-center justify-center">
                                <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                            </div>
                        </div>
                </div>
                <div className="w-full h-8 rounded-md bg-teal-50 flex items-center pl-2 ">
                    {name}
                </div>
                <div className="w-full h-16 rounded-md bg-teal-50 pl-2 pr-2 flex items-center">
                    {description.length > 0 ? (
                        <span>
                            {truncateString(description)}
                        </span>
                    ) : "No information provided."}
                </div>
                <div className="w-full h-32 rounded-md bg-teal-50 flex flex-col justify-center pl-2">
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
    );
}