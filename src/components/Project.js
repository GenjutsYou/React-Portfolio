import React from "react";

const projectStyle = {
  padding: "1rem",
  marginBottom: "1rem",
};

const appContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "500px",
  maxWidth: "300px",
  padding: "1rem",
  textAlign: "center",
  alignItems: "center",
  overflow: "hidden",
  border: "1px solid white",
  transition: "transform 0.3s",
};

const imageStyle = {
  maxWidth: "250px",
  maxHeight: "300px",
  border: "1px solid white",
};

const PStyle = {
  fontSize: "15px",
};

const Project = ({
  title,
  image,
  description,
  deployedLink,
  githubLink,
  skill,
  skillLink,
}) => {
  return (
    <div style={projectStyle}>
      <div style={appContainerStyle} className="hover-effect">
        <h3>{title}</h3>
        <img src={image} alt={`${title} Preview`} style={imageStyle} />
        <p style={PStyle}>{description}</p>
        <a href={deployedLink}>View App</a>
        <a href={githubLink}>GitHub Repo</a>
        <p style={PStyle}>
          {skill.map((skill, index) => (
            <span key={index}>
              <a href={skillLink[index]}>{skill}</a>
              {index !== skill.length - 1 && "|"}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Project;
