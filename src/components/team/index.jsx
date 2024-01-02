import React from "react";

const Team = (props) => {
  const team = props.data;

  const listeTeam = team.map((item) => (
    <div className="flex flex-col relative w-max" key={item.id}>
      <div className="relative w-40 h-40 rounded-lg group">
        <img
          src={item.image}
          className="image-team w-full h-full rounded-lg group-hover:opacity-50"
          alt={item.name}
        />
        <div className="text-team font-medium text-xl text-quaternary absolute top-0 left-5 mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.name}
        </div>
        <div className="text-team-role absolute top-10 left-5 mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.role}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-10">
      {listeTeam}
    </div>
  );
};

export default Team;
