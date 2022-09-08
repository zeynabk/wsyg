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
              Titre
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
            <p className="mt-4 text-center titre font-bold text-md border-black/50 pb-2 mb-4 border-dashed ">
              Sous Titre
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
          </div>
          <div className="bg-white p-4 rounded mb-4 ">
            <p className="text-center titre font-bold text-md border-b-2 border-black/50 pb-2 mb-4 border-dashed">
              Titre
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
            <p className="mt-4 text-center titre font-bold text-md  border-black/50 pb-2 mb-4 border-dashed">
              Sous Titre
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
          </div>
          <div className="bg-white p-4 rounded mb-4 ">
            <p className="text-center titre font-bold text-md border-b-2 border-black/50 pb-2 mb-4 border-dashed">
              Titre
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
            <p className="mt-4 text-center titre font-bold text-md  border-black/50 pb-2 mb-4 border-dashed">
              Sous Titre
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum provident earum corrupti hic voluptatibus a fuga
              doloribus iste beatae maxime. Corporis at eum explicabo inventore
              enim, iusto natus minus provident.
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
