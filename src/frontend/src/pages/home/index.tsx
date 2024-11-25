import { useState } from "react";
import Form from "./components/cardForm";
import { CARD_FORM_INITIAL_STATE } from "../../constants";
import CardPreview from "./components/cardPreview";
import CardShowroom from "../../components/CardShowroom";

export default function Home() {
    const [formData, setFormData] = useState(CARD_FORM_INITIAL_STATE);

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
                <CardShowroom />
            </div>
        </div>
    );
}