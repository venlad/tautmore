import React from "react";
import { chevRight } from "../../../assets/icons/IconList";

function Learningjourney() {
  return (
    <div>
      <div className="learning-journey-main">
        <div className="row">
          <div className="col-md-5">
            <h4>
              <span>We</span> keep the fun
              <br />
              going throughout
              <br />
              the learning journey
            </h4>

            <button>
              Let’s try brain-gym
              <span>{chevRight}</span>
            </button>
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </div>
  );
}

export default Learningjourney;
