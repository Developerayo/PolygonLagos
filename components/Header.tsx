import Logo from "../components/icons/Logo";
import Background from "../components/icons/Background";
import RightArrow from "../components/icons/ArrowRight";
import RightArrowSm from "../components/icons/ArrowRightSm";
import Polygon from "../components/icons/Polygon";
import styles from "../components/styles/Header.module.css";
import { useState, useEffect } from "react";
import SocialMedia from "./SocialMedia";
import Shape2 from "../components/icons/Shape2";
import Shape1 from "../components/icons/Shape1";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-[#0D031A] ">
      <div id="home"></div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden ">
        <Background />
      </div>

      <SmallMenu />
      <BigMenu />

      <div className="relative z-50 pt-20 lg:pt-36 lg:pb-32 lg:flex flex-row  ">
        <div className="lg:w-[58%] ">
          <div className='max-w-[640px] mx-auto lg:max-w-[750px] lg:ml-auto lg:mr-0 font-["Nunito_Sans"] font-[700] text-[2.2rem] lg:text-[3.2rem] text-white text-center lg:text-left mb-10 lg:mb-4 px-12 mt-28 '>
            <h1 className="relative w-fit mx-auto lg:mx-0 ">
              The State of Web3:
              <span className="absolute right-full top-0 bottom-0 flex items-center ">
                <Shape2 className="w-32 mr-6 " />
              </span>
            </h1>
            <h1 className="relative w-fit mx-auto lg:mx-0 ">
              DeFi & NFT
              <span className="absolute left-full top-0 bottom-0 flex items-center ">
                <Shape2 className="w-32 ml-6 " />
              </span>
            </h1>
          </div>

          <div className='max-w-[640px] mx-auto lg:max-w-[750px] lg:ml-auto lg:mr-0 font-["Nunito_Sans"] font-[400] leading-[2.4rem] text-[1.4rem] lg:text-[1rem] lg:leading-[1.8rem] text-white text-center lg:text-left my-10 lg:my-4 px-12 '>
            <p className="text-[#a3a3a3]">
            The future web's interface will most likely resemble the current one. The difference is in how websites' information is kept - on the blockchain versus a centralized database.
            </p>
          </div>

          <div className="lg:max-w-[750px] lg:ml-auto lg:mr-0 ">
            <GetTickets />
          </div>
        </div>

        <div
          className={
            "flex justify-center lg:justify-end pt-[20px] pb-[0px] px-14 lg:px-8 lg:w-[42%] " +
            styles["polygon"]
          }
        >
          <Polygon className="max-w-[360px] lg:max-w-[480px] " />
        </div>
      </div>

      <div className="bg-white rounded-full h-[6px] mt-20 mb-10 mx-[100px] lg:hidden relative z-50 "></div>
    </div>
  );
};

const GetTickets = () => {
  return (
    <div className="flex flex-row items-center my-20 lg:my-10 text-white w-fit mx-auto lg:mx-12 rounded-[50px] bg-[#312840] h-[50px] relative cursor-pointer group ">
      <div className="transition-[all] duration-500 ease group-hover:w-full absolute flex items-center rounded-full w-[50px] inset-y-0 left-[0px] right-auto bg-[#8347E5] ">
        <RightArrow className="w-[20px] ml-auto mr-[15px]  fill-white " />
      </div>
      <h1 className='transition-[all] duration-500 ease pl-[60px] pr-[35px] group-hover:pl-[35px] group-hover:pr-[60px] font-["Nunito_Sans"] font-[400] text-[16px] relative z-10 '>
        Get Tickets
      </h1>
    </div>
  );
};

const SmallMenuItems = () => {
  const linkStyle =
    "flex justify-between items-center hover:bg-[#2e2240] py-4 px-6 font-['Nunito_Sans'] font-[400] text-[1.2rem] mb-3 transition-[all] duration-[500ms] ease-out ";
  const arrowStyle = "w-6";
  return (
    <div className="rounded-[12px] bg-[#150F1E] overflow-hidden w-72 text-white mt-4 ">
      <a href="#home" className={linkStyle}>
        Home
        <RightArrowSm className={arrowStyle} />
      </a>
      <a href="#speakers" className={linkStyle}>
        Speakers
        <RightArrowSm className={arrowStyle} />
      </a>
      <a href="#sponsors" className={linkStyle}>
        Sponsors
        <RightArrowSm className={arrowStyle} />
      </a>
      <a href="#organizers" className={linkStyle}>
        Organizers
        <RightArrowSm className={arrowStyle} />
      </a>
      <a href="#contactus" className={linkStyle + " mb-0"}>
        Contact Us
        <RightArrowSm className={arrowStyle} />
      </a>
    </div>
  );
};

const SmallMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(" hidden");
  const [opactiy, setOpacity] = useState(" opacity-0");

  const toggleMenu = () => {
    if (isOpen) {
      setOpacity(" opacity-0");
      setIsOpen(false);
    } else {
      setDisplay(" block");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    let timeout: any;

    if (isOpen) {
      setOpacity(" opacity-100");
    } else {
      timeout = setTimeout(() => {
        setDisplay(" hidden");
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex flex-row justify-between items-end px-10 pb-3 pt-5 fixed inset-0 bottom-auto bg-[#090212] z-[100] ">
      <div>
        <Logo className=" w-[130px] " />
      </div>
      <div className=" mb-1 ">
        <MenuIcon toggleMenu={toggleMenu} />
      </div>

      <div
        className={
          "transition-[all] duration-[500ms] ease absolute top-full right-[25px] " +
          display +
          opactiy
        }
      >
        <SmallMenuItems />
      </div>
    </div>
  );
};

const BigMenu = () => {
  const [selected, setSelected] = useState(1);
  const liStyle = "cursor-pointer mx-3 ";
  const aStyle = "p-2";
  const shapeStyle =
    "w-14 mx-auto -mb-2 mt-[2px] transition-[all] duration-500 ease ";
  return (
    <div className="hidden lg:block fixed inset-0 bottom-auto z-[100] text-white  ">
      <div className="flex bg-[#090212] max-w-[1440px] mx-auto justify-around py-4 ">
        <div className="">
          <Logo className="w-[180px] " />
        </div>

        <ul className='flex justify-center items-center font-["Nunito_Sans"] font-[400] text-[1rem] '>
          <li
            onClick={() => {
              setSelected(1);
            }}
            className={liStyle}
          >
            <a href="#home" className={aStyle}>
              Home
            </a>
            <Shape1
              className={
                shapeStyle + (selected === 1 ? " opacity-1" : " opacity-0")
              }
            />
          </li>
          <li
            onClick={() => {
              setSelected(2);
            }}
            className={liStyle}
          >
            <a href="#speakers" className={aStyle}>
              Speakers
            </a>
            <Shape1
              className={
                shapeStyle + (selected === 2 ? " opacity-1" : " opacity-0")
              }
            />
          </li>
          <li
            onClick={() => {
              setSelected(3);
            }}
            className={liStyle}
          >
            <a href="#sponsors" className={aStyle}>
              Sponsors
            </a>
            <Shape1
              className={
                shapeStyle + (selected === 3 ? " opacity-1" : " opacity-0")
              }
            />
          </li>
          <li
            onClick={() => {
              setSelected(4);
            }}
            className={liStyle}
          >
            <a href="#organizers" className={aStyle}>
              Organizers
            </a>
            <Shape1
              className={
                shapeStyle + (selected === 4 ? " opacity-1" : " opacity-0")
              }
            />
          </li>
          <li
            onClick={() => {
              setSelected(5);
            }}
            className={liStyle}
          >
            <a href="#contactus" className={aStyle}>
              Contact Us
            </a>
            <Shape1
              className={
                shapeStyle + (selected === 5 ? " opacity-1" : " opacity-0")
              }
            />
          </li>
        </ul>

        <div className="flex items-center ">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

const MenuIcon = (props: any) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
    props.toggleMenu();
  };

  return (
    <div
      className="cursor-pointer relative h-[25px] w-[25px] "
      onClick={toggle}
    >
      <div
        className={
          "absolute top-0 left-0 " +
          (isActive ? styles["cont-s-2"] : styles["cont-s-1"])
        }
      >
        <div
          className={"h-[20px] w-[24px] flex flex-col justify-center relative "}
        >
          <div
            className={
              "h-[2px] rounded-[1px] bg-white absolute inset-0 bottom-auto " +
              (isActive ? styles["line1-s2"] : styles["line1-s1"])
            }
          ></div>
          <div
            className={
              "h-[2px] rounded-[1px] bg-white " +
              (isActive ? styles["line2-s2"] : styles["line2-s1"])
            }
          ></div>
          <div
            className={
              "h-[2px] rounded-[1px] bg-white absolute inset-0 top-auto " +
              (isActive ? styles["line3-s2"] : styles["line3-s1"])
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
