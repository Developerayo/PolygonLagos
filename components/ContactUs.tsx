import Message from "../components/icons/Message";
import Call from "../components/icons/Call";
import Location from "../components/icons/Location2";
import SocialMedia from "./SocialMedia";

const ContactUs = () => {
  return (
    <div className=" max-w-[1280px] mx-auto flex flex-col lg:flex-row mt-36 ">
      <div className=" max-w-[500px] mx-auto lg:w-1/2 lg:order-2 ">
        <div className="lg:hidden text-white text-center mx-14 px-8 mb-20 ">
          <ContactHeading />
        </div>
        <Form />
      </div>
      <div className="lg:w-1/2 ">
        <ContactDetail />
      </div>
    </div>
  );
};

const ContactDetail = () => {
  const style_1 = "w-7";
  const style_2 = "flex items-center mb-5 mx-auto w-fit lg:w-full ";
  const style_3 =
    "font-['Nunito_Sans'] font-[400] text-[1.2rem] leading-[1.8rem] ml-3 ";

  return (
    <div className="text-white max-w-[500px] mx-auto px-8 lg:max-w-[480px] lg:px-12 ">
      <div className="hidden lg:block mb-24 ">
        <ContactHeading />
      </div>

      <div className="mb-24 mt-20 lg:mt-0 text-[#A19DAB] ">
        <div className={style_2}>
          <Message className={style_1} />
          <span className={style_3}>polygonlagosteam@gmail.com</span>
        </div>

        <div className={style_2}>
          <Call className={style_1} />
          <span className={style_3}>{"(+234) 813 143 2189"}</span>
        </div>

        <div className={style_2}>
          <Location className={style_1} />
          <span className={style_3}>Zone Tech Park, Gbagada</span>
        </div>
      </div>

      <div className="w-fit mx-auto lg:w-full ">
        <SocialMedia />
      </div>
    </div>
  );
};

const Form = () => {
  const inputStyle =
    " bg-[#150F1E] border-[2px] border-[#352E47] rounded-[8px] w-full mb-6 py-[10px] px-[15px] ";
  return (
    <div className='text-white px-8 lg:pr-12 lg:pl-4 font-["Nunito_Sans"] font-[400] text-[16px] '>
      <form action="https://formspree.io/f/xpzbngra" method="POST">
      <input className={inputStyle} placeholder={"Full name"} type="name" name="name" />
      <input className={inputStyle} placeholder={"Email address"} type="email" name="email" />
      <input className={inputStyle} placeholder={"Subject"} type="subject" name="subject" />
      <textarea
        className={inputStyle}
        rows={5}
        placeholder={"Your message"}
        style={{ resize: "none" }}
        name="message"
      />
      <button className="rounded-[8px] bg-[#8347E5] w-full py-3" type="submit">
        Send Message
      </button>
      </form>
    </div>
  );
};

const ContactHeading = () => {
  return (
    <>
      <h1 className="font-['Nunito_Sans'] font-semibold text-[3.2rem] leading-[4rem] mb-4 ">
        Contact Us
      </h1>
      <p className="font-['Nunito_Sans'] font-[400] text-[1.2rem] leading-[1.8rem] text-[#A19DAB] ">
        Fill out the form and our team will get back to you within 24 hours
      </p>
    </>
  );
};

export default ContactUs;
