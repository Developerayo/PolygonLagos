import PersonCard from "./PersonCard";

const persons = [
  {
    name: "Shodipo Ayomide",
    picture: "/images/people/ayo.jpeg",
    position: "Global Head of Developer Advocacy",
    positionDetail: "Polygon Technology",
    socialLinks: ["https://github.com/developerayo", "https://twitter.com/developerayo", "https://www.linkedin.com/in/shodipo-ayomide/"],
  },
  {
    name: "Mayowa Tudonu",
    picture: "/images/people/mayowa.jpeg",
    position: "Blockchain Engineer",
    positionDetail: "Shard Labs",
    socialLinks: ["https://github.com/mayorcoded", "https://twitter.com/m_a_y_o_w_a", "https://www.linkedin.com/in/mayowa-tudonu"],
  },
  {
    name: "Adora Nwodo",
    picture: "/images/people/adora.jpeg",
    position: "Software Engineer II",
    positionDetail: "Microsoft",
    socialLinks: ["https://github.com/AdoraNwodo", "https://twitter.com/AdoraNwodo", "https://www.linkedin.com/in/adoranwodo/"],
  },
  {
    name: "David Adeola",
    picture: "/images/people/david.jpeg",
    position: "Frontend Engineer",
    positionDetail: "",
    socialLinks: ["https://github.com/DavidAdeola_", "https://twitter.com/DavidAdeola_", "https://www.linkedin.com/in/david-adeola/"],
  },
  {
    name: "Michael Shodipo",
    picture: "/images/people/michael.jpeg",
    position: "Product Designer",
    positionDetail: "Innovate Global",
    socialLinks: ["https://twitter.com/design_spree", "https://www.linkedin.com/in/michael-shodipo/"],
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
