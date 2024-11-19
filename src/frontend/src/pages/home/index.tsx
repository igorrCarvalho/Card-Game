import Form from "./components/cardForm";

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[50%] p-3 bg-white rounded">
                <div>
                    <div className="w-full flex items-center justify-center">
                        <span className="bold text-2xl">
                            Add a new card
                        </span>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}