export default function InactiveGame({ gameData, CardToRender }) {
    return (
        <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[60%] p-5 bg-white rounded flex flex-col items-center justify-center">
          <div className="flex">
              {gameData?.IAAliveCards.length > 0 ? gameData?.IAAliveCards.map((card, index) => (
                <div className="">
                  <CardToRender reactkey={index} cardData={card} />
                </div>
                )): null}
          </div>
          <div className="flex">
              {gameData?.playerAliveCards.length > 0 ? gameData?.playerAliveCards.map((card, index) => (
                <div className="">
                  <CardToRender reactkey={index} cardData={card} />
                </div>
                )): null}
          </div>
        </div>
      </div>
    );
}