import cinema from "../assets/images/logo/cinema.png";
import engineb from "../assets/images/logo/engineb.png";
import dermatology from "../assets/images/logo/dermatology.png";
import kidloop from "../assets/images/logo/kidloop.png";
import learnbud from "../assets/images/logo/learnbud.png";
import trudentz from "../assets/images/logo/trudentz.png";
import vioc from "../assets/images/logo/vioc.png";
import voicingai from "../assets/images/logo/voicingai.png";
import modisoft from "../assets/images/logo/modisoft.png";


export default function Ourclients() {
  return (
    <div className=" ">
      <div className=" mb-[20px] relative z-10">
        {/* <h2 className="text-center">Our Clients & Partners</h2>       */}
        <article className="wrapper">
          <div className="marquee client-marquee">
            <div className="marquee__group">
              <div>
                <img src={cinema} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={engineb} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={dermatology} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={kidloop} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={learnbud} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={trudentz} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={vioc} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={voicingai} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={modisoft} className="img-fluid" alt="" />
              </div>


            </div>

            <div aria-hidden="true" className="marquee__group">
               
            <div>
                <img src={cinema} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={engineb} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={dermatology} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={kidloop} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={learnbud} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={trudentz} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={vioc} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={voicingai} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={modisoft} className="img-fluid" alt="" />
              </div>
             
            </div>
            
          </div>
        </article>
      </div>
    </div>
  );
}
