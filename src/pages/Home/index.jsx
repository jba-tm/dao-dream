import React, { useState } from "react";
import Bird from "../../assets/images/bird.png";
import Coin from "../../assets/images/coin.png";

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

        <div className="mt-20 home__blocks">
          <div className="home__blocks__item gap-4">
            <div className="flex flex-col items-start gap-4 p-10">
              <h1 className="text-3xl">Earn a fixed APY</h1>

              <p className="text-2xl">-100,000%</p>

              <p className="text-secondary-text">
                Here at HighPoint, we want to build a safe, long-term investment
                opportunity for those realistic and careful investors out there.{" "}
              </p>

              <button className="py-2 px-4 rounded-full bg-border">
                Learn more
              </button>
            </div>

            <img src="/charts/1.png" alt="" className="w-full" />
          </div>

          <div className="home__blocks__item flex flex-col items-start gap-4 p-10">
            <h1 className="text-3xl">Staking & Compounding</h1>

            <p className="text-2xl">Automatic Staking in Your Wallet</p>

            <p className="text-secondary-text">
              Here at HighPoint, we want to build a, long-term investment
              opportunity for those realistic and careful
            </p>

            <button className="py-2 px-4 rounded-full bg-border">
              Learn more
            </button>

            <div className="mt-auto flex flex-col gap-4 w-full">
              <div className="home__blocks__item__card">
                <p className="mb-4">
                  <span className="mr-2">Results</span>
                  <span className="text-secondary-text">1,726 votes</span>
                </p>

                <div className="flex items-center justify-between mb-2">
                  <p>
                    Yes <span className="text-secondary-text">91.75%</span>
                  </p>

                  <div className="flex text-secondary-text">
                    1.29K votes 1.67M TON
                  </div>
                </div>
                <div className="home__blocks__item__card__loading ">
                  <div className="home__blocks__item__card__loading__inner"></div>
                </div>
              </div>

              <div className="home__blocks__item__card">
                <p className="mb-4">
                  <span className="mr-2">Winner</span>
                  <span className="text-secondary-text">1,543 votes</span>
                </p>

                <div className="flex gap-4 items-center">
                  <img src={Coin} alt="" />

                  <div className="flex flex-col gap">
                    <p>Stake CAKE</p>

                    <p className="text-secondary-text">
                      Stake, Earn — And more!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
