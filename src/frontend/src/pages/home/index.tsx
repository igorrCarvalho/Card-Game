import { useState } from "react";
import Form from "./components/cardForm";
import { CARD_FORM_INITIAL_STATE } from "../../constants";
import CardPreview from "./components/cardPreview";
import CardShowroom from "../../components/CardShowroom";
import useCardStore from "../../stores/cardStore";
import { Button } from "../../components/ui/Button";
import { getDefaultRandomCards, startAGame } from "../../api";
import { redirect, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(CARD_FORM_INITIAL_STATE);
    const cards = useCardStore((state) => state.cards);
    const selectedCards = useCardStore((state) => state.selectedCards);

    async function handlePlayBtn() {
        if (cards.length < 4) {
            return;
        }
        const IACards = await getDefaultRandomCards();
        const playerAliveCards = JSON.stringify(selectedCards);
        const IAAliveCards = JSON.stringify(IACards);
        const playerDeadCards = JSON.stringify([]);
        const IADeadCards = JSON.stringify([]);
        const isActive = true;
        const cardsFighting = "";
        const game = { isActive, cardsFighting, playerAliveCards, IAAliveCards, playerDeadCards, IADeadCards };
        const { id } = await startAGame(game);
        navigate(`/game/${id}`);
        
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-[50%] p-10 bg-white rounded">
                <div>
                    <div className="w-full flex items-center justify-center">
                        <span className="bold text-2xl">
                            Add a new card
                        </span>
                    </div>
                    <div className="w-full h-full flex">
                        <div className="w-[50%]">
                            <Form setFormData={setFormData} formData={formData} />
                        </div>
                        <div className="w-[50%] flex items-center justify-center">
                            <CardPreview cardData={formData} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                {cards.length > 0 ? (
                    <CardShowroom />

                ) : null}
            </div>
            <Button
                onClick={handlePlayBtn}
                variant="default"
                className="fixed bottom-2 right-[50vw] z-50"
                >
                Play
            </Button>
        </div>
    );
}