import React from "react";

const resumeStyle = {
  padding: "1rem",
  textAlign: "center",
};

const h2Style = {
  marginTop: "1rem",
  marginBottom: "3rem",
};

const pStyle = {
  marginBottom: "2rem",
};

const Resume = () => {
  return (
    <section style={resumeStyle}>
      <h2 style={h2Style}>Resume</h2>
      <div style={resumeStyle}>
        <iframe
          src={require("../../assets/documents/Resume.pdf")}
          title="Resume"
          width="100%"
          height="600px"
        />
        <p style={pStyle}>
          You can download my resume by clicking the link below:
        </p>
        <p>
          <a
            href={require("../../assets/documents/Resume.pdf")}
            download="Resume.pdf"
          >
            Download Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
