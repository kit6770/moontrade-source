/* eslint-disable @next/next/no-img-element */
import DexLogo from "../../public/images/dex_logo.svg";
import LotteryCoverImage from "../../public/images/lottery_cover.svg";
import TradeCoverImage from "../../public/images/trade_cover.svg";
import SmartMoneyCoverImage from "../../public/images/smart_money_cover.svg";

import BallBigImage from "../../public/images/ball_big.svg";
import BallSmallImage from "../../public/images/ball_small.svg";
import CoilBigImage from "../../public/images/coil_big.svg";
import CoilSmallImage from "../../public/images/coil_small.svg";


export default function Home() {
  return (
    <main className="h-screen bg-[#0A0A0A] text-white overflow-scroll">
      <section>
        <div className="
          flex items-start justify-center mt-[33px]
          lg:mt-[55.9px]
        ">
          <div className="pt-[106.81px] hidden lg:block">
            <img src={BallSmallImage.src} alt="" className="size-[157.39px]" />
          </div>

          <div
            className="
              flex-1 bg-no-repeat bg-center bg-contain h-full pt-[42.25px] min-h-[331px]
              md:min-h-[520px]
              lg:h-[629.8px] lg:pt-[80px]
            "
            style={{ backgroundImage: `url(${BallBigImage.src})` }}
          >
            <div className="flex justify-center items-center">
              <img src={DexLogo.src} alt="logo" className="h-[81.55px] md:h-[118.05px] lg:h-[155.12px]" />
            </div>
            <div className="mt-8 text-center">
              <div className="
                font-semibold text-[46px] leading-[46px]
                md:text-[68px] md:leading-[68px]
                lg:text-[100px] lg:leading-[100px]
              ">
                Moontrade
              </div>
              <div className="
                 font-normal px-10
                 text-[11.57px] leading-[14px] mt-[17.65px]
                 md:text-[18px] md:leading-[25.63px] md:mt-[20px]
                 lg:text-[22px] lg:leading-[26.63px] lg:mt-[14.87px]
              ">
                Decentralized trading without limits—copy success and earn together anytime!
              </div>
            </div>
          </div>

          <div className="pt-[264.73px] hidden lg:block">
            <CoilItem />
          </div>
        </div>
      </section>


      <section className="relative top-[-45px] pb-[130px] md:top-[-130px] lg:top-[-130px]">
        <div className="
          grid gap-[25px] px-[24px] grid-cols-1
          md:grid-cols-1 md:px-[90px]
          lg:grid-cols-3 lg:px-[90px]
        ">
          <Card
            imageUrl={LotteryCoverImage.src}
            title="Luck-Based MEME Coin Recommendations"
            description="Our unique algorithm assesses various factors to provide MEME coin recommendations tailored to your personal luck. "
          />
          <Card
            header={
              <div className="
                flex justify-center items-center w-full whitespace-nowrap bg-[#C8FF00] text-[#000000]
                text-[21.33px] leading-[17.07px] py-[35px] rounded-[22.76px] font-semibold 
                lg:py-[50px] 
                2xl:rounded-[32px] 2xl:text-[30px] 2xl:leading-[24px]
                
              ">
                Flexible Trading Options
              </div>
            }
            imageUrl={TradeCoverImage.src}
          />
          <Card
            imageUrl={SmartMoneyCoverImage.src}
            title="Social Trade"
            description="Supports quick buying and selling,Easily follow successful traders and share their strategies and profits, enabling you to earn together."
          />
        </div>
      </section>

    </main>
  );
}

type CardProps = {
  title?: string;
  description?: string;
  header?: React.ReactNode,
  imageUrl: string;
}

const Card = (props: CardProps) => {
  const { title, description, header, imageUrl } = props;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-[35px] w-full max-w-[500px] lg:max-w-full">
        {header}
        <div className="">
          <img src={imageUrl} alt="" className="w-full" />
          {title && (
            <div className="
            font-semibold
            text-[20px] leading-[22.91px] mt-[13.21px]
            lg:text-[26px] lg:leading-[32px] lg:mt-[18px]
          ">
              {title}
            </div>
          )}
          {description && (
            <div className="
            font-normal text-[#666666]
            text-[14px] leading-[17.18px] mt-[10px]
            lg:text-[16px] lg:leading-[24px] lg:mt-[11.4px] 
          ">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const CoilItem = () => {
  return (
    <div className="relative w-[200.66px]">
      <img src={CoilBigImage.src} alt="" className="absolute size-[200.66px]" />
      <img src={CoilSmallImage.src} alt="" className="absolute size-[200.66px] top-5" />
    </div>
  )
}