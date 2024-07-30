import React from 'react';
import Navbar from "../components/Navbar.jsx";
import CatalogueVideo from "../components/CatalogueVideo.jsx";
import "../index.css";

const teamMembers = [
  {
    name: "Jany Yang",
    title: "CEO",
    description: "Jany Yang is a visionary leader with a deep passion for cars and innovation. With over two decades of experience in the automotive industry, he has led CarQuest to become a beacon of excellence and inspiration.",
    image: "https://img.buzzfeed.com/buzzfeed-static/complex/images/bvbndkzvlqnwovinwomw/lori-harvey.jpg?output-format=jpg&output-quality=auto"
  },
  {
    name: "Jane Smith",
    title: "Chief Operating Officer",
    description: "Jane Smith oversees our operational strategies and ensures seamless execution. Her dedication and leadership drive our team towards excellence.",
    image: "https://crackmagazine.net/wp-content/uploads/2016/12/paralax-jorja-smith2-copy.jpg"
  },
  {
    name: "Michael Johnson",
    title: "Head of Design",
    description: "Michael Johnson leads our design team, crafting visually stunning and user-friendly experiences. His creativity fuels innovation in automotive aesthetics.",
    image: "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk5MzM0MzQyNDI4NzMxMzQy/michael-b.jpg"
  },
  {
    name: "Emily Brown",
    title: "Technical Director",
    description: "Emily Brown spearheads our technical initiatives, ensuring robust and scalable solutions. Her expertise drives technological advancement in automotive platforms.",
    image: "https://m.media-amazon.com/images/M/MV5BMjA1Njc0MTUzN15BMl5BanBnXkFtZTgwNTg1MjEwNDI@._V1_.jpg"
  },
  {
    name: "David Lee",
    title: "Marketing Manager",
    description: "David Lee leads our marketing efforts, shaping our brand presence and engaging our audience. His strategic insights drive our growth in the automotive market.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK6RYvD9xL_p5zKBNa_Clyjfu_KjWwfVDjQ&s"
  }
];

const TeamMemberCard = ({ member }) => (
  <div className="about-card">
    <div className="ceo-info">
      <img src={member.image} alt={member.title} className="ceo-image" />
      <div className="ceo-details">
        <h3>{member.name}</h3>
        <p>{member.title}</p>
        <p>{member.description}</p>
      </div>
    </div>
  </div>
);

function AboutUs() {
  return (
    <div>
      <Navbar />
      <CatalogueVideo />
      <div className="about-us-container">
        <div className="about-card">
          <h2>About Our Team</h2>
          <p>Meet the passionate individuals who drive our vision forward in the automotive industry.</p>
        </div>
        <div className="about-us-list">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
