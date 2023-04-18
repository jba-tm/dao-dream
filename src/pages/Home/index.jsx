import React, { useState } from "react";
import Bird from "../../assets/images/bird.png";

function Index() {
  const [cards] = useState([
    {
      title: "Sustainable Growth",
      text: "Invest in a crypto that prioritizes long-term sustainability and growth, rather than quick gains and instability.",
    },
    {
      title: "Sustainable Growth",
      text: "Invest in a crypto that prioritizes long-term sustainability and growth, rather than quick gains and instability.",
    },
    {
      title: "Auto Reinvesting",
      text: "Keep your investments growing with our automatic reinvestment feature, which reinvests your earnings for you.",
    },
    {
      title: "Anti-Dump",
      text: "Our anti-dump policy ensures that large sell-offs do not disrupt the market and harm our investors' portfolios.",
    },
  ]);

  return (
    <div className="home__wrapper pt-24">
      <div className="container mx-auto">
        <div className="mt-12 flex flex-col gap-10 text-center text-5xl font-medium">
          <h2>The Best Auto-Staking & Auto-Compounding Protocol in Crypto</h2>

          <h1>DAO DREAM</h1>

          <img src={Bird} alt="" className="mx-auto home__image" />

          <p className="text-xl font-regular w-1/2 mx-auto mt-4">
            Essentially purchase and hold the HighPoint Token acquire hazardous,
            yet manageable, easy revenue
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          {cards.map((card, index) => (
            <div className="home__card mb-8" key={index}>
              <img
                src={`/card-icons/${index + 1}.svg`}
                alt=""
                className="mb-10"
              />

              <div className="home__card__title text-xl mb-2">{card.title}</div>

              <div className="home__card__text text-md">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
