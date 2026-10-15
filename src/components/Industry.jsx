import sports from "../assets/images/industry/sports.png";
import saas from "../assets/images/industry/saas.png";
import ai from "../assets/images/industry/ai.png";
import restaurant from "../assets/images/industry/restaurant.png";
import healthCare from "../assets/images/industry/healthCare.png";
import fintech from "../assets/images/industry/fintech.png";
import travel from "../assets/images/industry/travel.png";
import ecommerce from "../assets/images/industry/Ecommerce.png";

import Reveal from "./Reveal";

export default function Industry() {
  return (
    <div className="containerX ">
      <div className="sm:mt-[100px]  mb-[60px] relative z-10">
        <Reveal>
          <h2 className="text-center">Industry I Served</h2>
          <p className="section-lead">
            Industries I have designed for over the years.
            <br />
            From healthcare and fintech to AI, travel, and retail.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={80}>
        <article className="wrapper">
          <div>
            <div className="Industry_section">
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={sports} className="img-fluid" alt="" />
                </div>
                <p>Sports</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={saas} className="img-fluid" alt="" />
                </div>
                <p>SAAS</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={ai} className="img-fluid" alt="" />
                </div>
                <p>AI</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={restaurant} className="img-fluid" alt="" />
                </div>
                <p>Restaurant</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={healthCare} className="img-fluid" alt="" />
                </div>
                <p>Health Care</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={fintech} className="img-fluid" alt="" />
                </div>
                <p>Fintech</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={travel} className="img-fluid" alt="" />
                </div>
                <p>Travel</p>
              </div>
              <div className="Industry_items_container">
                <div className="Industry_items ">
                  <img src={ecommerce} className="img-fluid" alt="" />
                </div>
                <p>Ecommerce</p>
              </div>

            </div>
          </div>
        </article>
        </Reveal>
      </div>
    </div>
  );
}
