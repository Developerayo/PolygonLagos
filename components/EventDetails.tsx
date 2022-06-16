import Calender from "../components/icons/Calender";
import Location from "../components/icons/Location";

const EventDetails = () => {
  return (
    <div className="text-white ">
      <h1 className="text-center font-semibold font-['Nunito_Sans'] text-[3.3rem] leading-[4rem] mb-6 mt-24">
        Event Details
      </h1>
      <div className="flex flex-col sm:flex-row max-w-[500px] sm:max-w-[1190px] mx-auto p-5 md:p-0">
        <Event
          title="15th June, 2022"
          content="10:00 AM - 04:00 PM"
          img={Calender}
        />
        <Event
          title="Zone Tech Park"
          content="Plot 9 Gbagada Industrial Scheme, Beside UPS, Gbagada Expressway"
          img={Location}
        />
      </div>
    </div>
  );
};

const Event = (props: any) => {
  return (
    <div className="border-[1px] border-[#3f364a] text-center sm:w-1/2 flex flex-col items-center m-4 pb-12 pt-12 px-12 ">
      <props.img className=" w-10 mb-4 " />
      <h1 className='font-["Nunito_Sans"] text-[2rem] leading-[2.3rem] mb-3 font-semibold'>
        {props.title}
      </h1>
      <p className='font-[400] font-["Nunito_Sans"] text-[1rem] leading-[1.2rem] text-[#8a8989]'>
        {props.content}
      </p>
    </div>
  );
};

export default EventDetails;
