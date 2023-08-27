import React from "react";
import Card1 from "./Card1";

export default function Advisors() {
  const data = [
    {
      name: "Dr. Omkar",
      position: "Principal Project,",
      college: "Scientist at Indian Instituteof Technology, Madras",
      image: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Vivek Dwivedi",
      position: "Founder SciAstra,",
      college: "Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER",
      image: "https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg",
    },
    {
      name: "Akhil Tripathi",
      position: "Cofounder SciAstra,",
      college: "Mentor, Qualified NEST, Master's Student at NISER",
      image: "https://www.sciastra.com/teams/akhil_tripathi_niser.jpg",
    },
  ];
  return (
    <section>
      <div className="special-heading size-3x5">Mentors and Advisors</div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {data.map((mentor) => (
          <Card1
            name={mentor.name}
            college={mentor.college}
            image={mentor.image}
            position={mentor.position}
          />
        ))}
      </div>
    </section>
  );
}
