import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>ZikraByte Solutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing full-stack web applications using MongoDB, Express.js,
              React.js, Node.js, and Next.js. I focus on building responsive
              UIs, integrating complex APIs, and ensuring high performance and
              scalability for client and admin dashboards.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Greet Labs Pvt Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Specialized in the MERN stack to deliver scalable web solutions.
              My responsibilities included developing RESTful APIs, building
              dynamic front-end interfaces, and maintaining clean, modular
              codebases for end-to-end product development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Internship</h4>
                <h5>Greet Labs Pvt Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Gained practical experience in MERN stack development by building
              and debugging web applications. Collaborated with senior
              developers to implement key features, fix bugs, and improve overall
              user experience.
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Career;
