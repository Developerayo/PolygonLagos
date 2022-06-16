import Binance from "../components/icons/BinanceLogo";
import Meta from "../components/icons/MetaLogo";
import Google from "../components/icons/GoogleLogo";
import Amazon from "../components/icons/AmazonLogo";

const Sponsors = () => {
  const style_1 = "w-32 sm:w-40 mx-12 my-8 ";
  return (
    <div className="text-white px-10 ">
      <h1 className="text-center font-semibold font-['Nunito_Sans'] text-[3.3rem] leading-[4rem] mt-28 ">
        Our Amazing Sponsors
      </h1>
      <div className="border-[1px] border-[#3f364a] max-w-[1180px] mx-auto flex flex-row flex-wrap justify-center p-4 mt-20 ">
        <Binance className={style_1} />
        <Meta className={style_1} />
        <Google className={style_1} />
        <Amazon className={style_1} />
        <Meta className={style_1} />
        <Google className={style_1} />
        <Amazon className={style_1} />
      </div>
    </div>
  );
};

export default Sponsors;
