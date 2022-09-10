import React from "react";
import Image from "next/image";
import AboutCard from "./AboutCard";
import Team from "./team";
const AboutBG = "/img/about.jpg";
const PexelBG = "/img/pexel2.jpg";
const SecondPage = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <div
          className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-b from-transparent to-pink"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center">
          <p className="text-3xl md:text-5xl lg:text-7xl font-extrabold w-full md:w-2/3 lg:w-4/5  md:pl-0 pl-4 container mx-auto tracking-tight leading-loose">
            {
              "Let's be more involved in science, technology, engineering & mathematics"
            }
          </p>
        </div>
        <Image
          src={AboutBG}
          alt="science and women"
          objectFit="cover"
          layout="fill"
          className="w-full h-full"
        />
      </div>

      {/* Robotic SEction */}
      <div className=" px-4 py-4 my-10 container mx-auto">
        <div className="sm:text-3xl md:text-5xl text-4xl md:w-1/2 sm:w-8/12 w-11/12 font-bold">
          Robotic is becoming a life changing now
          <div className="h-2 bg-gradient-to-r from-noir via-white to-transparent rounded-full w-full my-8" />
        </div>

        <div className="text-xl md:text-2xl md:w-4/5 w-full text-gray-100 py-4">
          <p className="leading-loose">
            {
              "Did you know on average, those with stem majors earn $500,000 more over the course of their lifetime  \
            than those with no-stem majors"
            }
          </p>
          <p className="leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            provident earum corrupti hic voluptatibus a fuga doloribus iste
            beatae maxime. Corporis at eum explicabo inventore enim, iusto natus
            minus provident.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full px-4 md:h-full h-auto mt-4 container mx-auto">
        <div className="grid md:grid-cols-3 justify-center items-center grid-cols-1 gap-3 my-4">
          <AboutCard
            number={"20"}
            title={"membres"}
            text={
              "The membership of the organization comprises highly skilled people to have advanced knowledge and skills in mathematics and science. This will therefore serve as a source of much needed personnel to advance to agenda the association"
            }
          />
          <AboutCard
            number={"100"}
            title={"participants"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti hic voluptatibus a fuga doloribus iste beatae maxime. Corporis at eum explicabo inventore enim, iusto natus minus provident."
            }
          />
          <AboutCard
            number={"70%"}
            title={"success"}
            text={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti hic voluptatibus a fuga doloribus iste beatae maxime. Corporis at eum explicabo inventore enim, iusto natus minus provident."
            }
          />
        </div>
      </div>

      {/* Section Miscellaneous */}
      <div className=" text-black">
        <div className="text-centergrid md:grid-cols-2 gap-4 py-5 md:my-20 my-10 container mx-auto px-4">
          <div className="bg-white p-4 rounded mb-4">
            <p className="text-center titre font-bold text-md border-b-2 border-black/50 pb-2 mb-4 border-dashed ">
            Opportunities and challenges in achieving goals and objectives            
            </p>
            <div>
            To achieve the goal and objectives of AIMS-WPSYG, the following internal and external opportunities and challenges have been identified by the organization:
            </div>
            <p className="mt-4 text-center titre font-bold text-md border-black/50 pb-2 mb-4 border-dashed ">
            Internal Strengths 
            </p>
            <p className="mt-4 text-center titre font-bold text-md border-black/50 pb-2 mb-4 border-dashed ">
            High human capacity 
            </p>
            <div>
            The membership of the organization comprises highly skilled people to have advanced 
            knowledge and skills in mathematics and science. 
            This will therefore serve as a source of much needed personnel 
            to advance to agenda the association
            </div>
            <p className="mt-4 text-center titre font-bold text-md border-black/50 pb-2 mb-4 border-dashed ">
            Wide spatial coverage 
            </p>
            <div>
            With the huge network of women alumni of the African Institute for Mathematical 
            Sciences who have gone on to attain blissful professional goals located all over the African continent,
            the organization has a large pool of people to tap on in situ for its activities when it expands its activities 
            to the rest of the African continent.
            </div>
            <p className="mt-4 text-center titre font-bold text-md border-black/50 pb-2 mb-4 border-dashed ">
            Ease in accessing locations  
            </p>
            <div>
            Most of the activities of the organization will be designed as outreach programs which will either take place at the location 
            of the target population or online. 
            This eliminates the need for external venues in most cases
            </div> 

          </div>
          <div className="bg-white p-4 rounded mb-4 ">
            <p className="text-center titre font-bold text-md border-b-2 border-black/50 pb-2 mb-4 border-dashed">
            Internal Challenges
            </p>
            
            <p className="mt-4 text-center titre font-bold text-md  border-black/50 pb-2 mb-4 border-dashed">
            Availability of members
            </p>
            <div>
            Due to the work schedule of AIMS alumni in particular, 
            it is anticipated that in some cases, there will be difficulty 
            in getting a convenient and suitable time that fits into their plans.
            To ameliorate this, plans will be drawn in partnership members concerned
            and there will be constant engagement 
            with them to ensure smooth roll out of all activities.
            </div>
            
          </div>
          <div className="bg-white p-4 rounded mb-4 ">
            <p className="text-center titre font-bold text-md border-b-2 border-black/50 pb-2 mb-4 border-dashed">
            External Strengths
            </p>
            <p className="mt-4 text-center titre font-bold text-md  border-black/50 pb-2 mb-4 border-dashed">
            Partnerships
            </p>
            <div>
            AIMS-WPSYG is backed by well-established and highly reputable organizations
             including AIMS, 
            international organizations for education and gender, 
            the ministries of education and higher education of various countries, 
            universities, colleges, high schools, private companies etc. 
            These organizations will therefore support the association logically and
             financially to ensure that its goals and objectives are met.
            </div>
            <p className="mt-4 text-center titre font-bold text-md  border-black/50 pb-2 mb-4 border-dashed">
            Strategic Plan
            </p>
            <div>
            To attain the goals and objectives of AIMS-WPSYG, the organization as adopted a strategic plan which is based of its planned activities over
             the short-term (1 year), medium-term (next 2 years) and long-term (next 5 years).

            </div>
          </div>
        </div>
      </div>
      <div>
        <Team />
      </div>
      {/* Illustration Images */}
      <div className="w-full h-20 "></div>
    </>
  );
};

export default SecondPage;
