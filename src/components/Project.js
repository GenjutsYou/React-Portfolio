import React, { useState } from "react";

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
  transition: "opacity 0.3s",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "transparent",
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={projectStyle}>
      <div style={appContainerStyle} className="hover-effect">
        <h3>{title}</h3>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={image}
            alt={`${title} Preview`}
            style={{
              ...imageStyle,
              opacity: isHovered ? 0.5 : 1,
              transition: "opacity 0.3s",
            }}
          />
          {isHovered && (
            <div style={overlayStyle}>
              {/* Display skills */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {skill.map((skill, index) => (
                  <a
                    key={index}
                    href={skillLink[index]}
                    style={{
                      fontSize: "15px",
                      margin: "5px",
                      padding: "5px",
                    }}
                  >
                    {skill}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <p style={PStyle}>{description}</p>
        <a href={deployedLink}>View App</a>
        <a href={githubLink}>GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
