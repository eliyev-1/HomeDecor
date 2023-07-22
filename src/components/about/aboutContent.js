import React from "react";

import aboutImage from "../../assets/about/About us.png";
import "./about.css";

function AboutContent() {
  return (
    <>
     
      <div className="about container">
        <div className="about__left">
          <div className="about__left__image">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat et voluptates
            repudiandae sint et molestiae non
          </p>
        </div>
      </div>
    
    </>
  );
}

export default AboutContent;
