import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Ekwom Nelson N</p>
          <p>Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
        <br/>

        <a href='nelson.pdf' download='Nelson nelson.pdf'>
                         <button>Get Resume</button>

                         </a>
      </div>
      <div className="person">
        <img 
          src={`${process.env.PUBLIC_URL}/mo-logo1.jpg`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
