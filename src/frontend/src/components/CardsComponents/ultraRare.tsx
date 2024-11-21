import { Axe, Heart, ShieldHalf, ShieldPlus, Star, WandSparkles } from "lucide-react";
import { truncateString } from "../../utils";
import { dataType } from "../../pages/home/components/cardPreview";

export default function UltraRareCard({ cardData }: dataType) {
    const { rarity, name, description, life, damageType, armorType, armor, damage, superCard, image } = cardData;
    const canShowOverall = armor && damage && life;
    const overall = Math.round((Number(armor) + Number(life) + Number(damage)) / 3)
    return (
        <div>
            <div className="card-content flex items-center justify-center w-[80%] h-[65%] rounded-md">
            <div className="w-[90%] h-[93%] bg-zinc-200 rounded-md p-3 relative flex flex-col gap-1">
                <div className="rounded-full h-10 w-10 bg-white border border- flex z-50 items-center justify-center absolute top-0.5 left-0.5">
                    {canShowOverall ? (overall) : "?"}
                </div>
                <div className="relative w-full h-48 bg-white rounded-md">
                    <img src={image} className="w-full h-full" />

                    {rarity.length > 0 ? (
                        <div className="flex absolute bottom-1 inset-x-28">
                            {superCard ? (
                                <>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white "/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                </>
                            ) : rarity === "Common" ? (
                                <>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                </>
                            ) : rarity === "Rare" ? (
                                <>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                </>
                            ) : (
                                <>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                    <Star fill="yellow" className="w-4 h-4 stroke-white"/>
                                </>
                            )}
                        </div>
                    ) : null}
                </div>
                <div className="w-full h-8 rounded-md bg-white flex items-center pl-2 ">
                    {name}
                </div>
                <div className="w-full h-16 rounded-md bg-white pl-2 pr-2 flex items-center">
                    {description.length > 0 ? (
                        <span>
                            {truncateString(description)}
                        </span>
                    ) : "No information provided."}
                </div>
                <div className="w-full h-32 rounded-md bg-white flex flex-col justify-center pl-2">
                    <div className="w-full flex items-center gap-1">
                      <Heart className="w-4 h-4 stroke-emerald-400" />
                      -
                      <span>
                        {life}
                      </span>
                    </div>
                    <div className="w-full flex items-center gap-1">
                        {damageType === "Magic" ? (
                            <WandSparkles className="w-4 h-4 stroke-violet-600" />
                        ) : (
                            <Axe className="w-4 h-4 stroke-amber-600" />
                        )}
                        -
                        <span>
                            {damage}
                        </span>
                    </div>
                    <div className="w-full flex items-center gap-1">
                      { armorType === "Magic" ? (
                        <ShieldPlus className="w-4 h-4 stroke-violet-600" />
                      ) : (
                        <ShieldHalf className="w-4 h-4 stroke-amber-300" />
                      )}
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