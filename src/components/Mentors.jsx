import React from "react";
import Card from "./Card";

export default function Mentors() {
  const data = [
    {
      name: "Mandar Tornekar",
      college: "GMC Dhule",
      image: "http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg",
    },
    {
      name: "Sehasree Mohanta",
      college: "IACS",
      image: "http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg",
    },
    {
      name: "Piyush Verma",
      college: "IISER Pune",
      image:
        "http://sciastra.com/new_admin//teams/files/Piyush_Verma_biology.jpg",
    },
    {
      name: "Aditya Nayak",
      college: "IISER Mohali",
      image:
        "http://sciastra.com/new_admin//teams/files/Aditya%20Nayak_Biology.jpeg",
    },
  ];
  return (
    <section>
      <div className="special-heading size-3x5">MEET Your Mentors</div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {data.map((mentor) => (
          <Card
            name={mentor.name}
            college={mentor.college}
            image={mentor.image}
          />
        ))}
      </div>
    </section>
  );
}
