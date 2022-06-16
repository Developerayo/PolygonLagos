import PersonCard from "./PersonCard";

const persons = [
  {
    name: "Nader Debit",
    picture: "/images/people/person_5.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_4.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_3.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_2.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_1.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_5.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_3.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
  {
    name: "Nader Debit",
    picture: "/images/people/person_4.png",
    position: "Software Engineer",
    positionDetail: "Node & Edge",
    socialLinks: ["link1", "link2", "link3"],
  },
];

const MeetTheOrganizers = () => {
  return (
    <div className="mt-32 px-6 md:px-4 ">
      <h1 className="text-center text-white font-semibold font-['Nunito_Sans'] text-[3.3rem] leading-[4rem]">
        Meet The Organizers
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

export default MeetTheOrganizers;
