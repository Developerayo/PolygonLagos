import PersonCard from "./PersonCard";

const persons = [
  {
    name: "Sandeep Nailwal",
    picture: "/images/people/sandeep.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Jaynti Kanani",
    picture: "/images/people/jaynti.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Sandeep Nailwal",
    picture: "/images/people/sandeep.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Jaynti Kanani",
    picture: "/images/people/jaynti.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Sandeep Nailwal",
    picture: "/images/people/sandeep.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Jaynti Kanani",
    picture: "/images/people/jaynti.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Sandeep Nailwal",
    picture: "/images/people/sandeep.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Jaynti Kanani",
    picture: "/images/people/jaynti.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Sandeep Nailwal",
    picture: "/images/people/sandeep.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Jaynti Kanani",
    picture: "/images/people/jaynti.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Sandeep Nailwal",
    picture: "/images/people/sandeep.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Jaynti Kanani",
    picture: "/images/people/jaynti.jpeg",
    position: "Co-Founder",
    positionDetail: "Polygon Technology",
    socialLinks: ["link1", "link2", "link3"],
  },
];

const MeetTheSpeakers = () => {
  return (
    <div className="mt-32 px-4 md:px-4 ">
      <h1 className="text-center text-white font-semibold font-['Nunito_Sans'] text-[3.3rem] leading-[4rem]">
        Meet The Speakers
      </h1>
      <div className="mt-16 flex flex-row flex-wrap justify-center max-w-[1200px] mx-auto ">
        {persons.map((person, i) => {
          return (
            <PersonCard
              key={i}
              picture={person.picture}
              name={person.name}
              position={person.position}
              positionDetail={person.positionDetail}
              socialLinks={person.socialLinks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MeetTheSpeakers;
