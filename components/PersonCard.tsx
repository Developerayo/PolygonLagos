import Image from "next/image";
import GithubFillLogo from "../components/icons/GithubFillLogo";
import TwitterFillLogo from "../components/icons/TwitterFillLogo";
import LinkedinFillLogo from "../components/icons/LinkedinFillLogo";

const PersonCard = (props: any) => {
  const style_1 = "mr-[5px]";
  return (
    <div className="relative w-[340px] md:w-[280px] text-white mx-3 my-5 md:mx-2 md:my-4 ">
      <div className="person-pic">
        <Image
          src={props.picture}
          height={100}
          width={100}
          layout="responsive"
          alt="person"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 top-auto bg-[#150F1E] py-[10px] px-[14px] ">
        <h1 className='font-["Nunito_Sans"] font-[700] text-[13px] mb-[4px] '>
          {props.name}
        </h1>
        <p className='font-["Nunito_Sans"] font-[400] text-[10.5px] mb-[8px] '>
          {props.position},{" "}
          <span className="text-purple-400 ">{props.positionDetail}</span>
        </p>
        <div className="flex ">
          <a className={style_1} href={props.socialLinks[0]}>
            <GithubFillLogo />
          </a>
          <a className={style_1} href={props.socialLinks[1]}>
            <TwitterFillLogo />
          </a>
          <a className={style_1} href={props.socialLinks[2]}>
            <LinkedinFillLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
