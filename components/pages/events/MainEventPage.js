import Image from "next/image";

function MainEventPage({}) {
  return (
    <main className="h-[500px] relative ">
      <div className="">
        <Image
          src="/events/meeting.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="group"
        />
        <div className=" absolute w-full h-full bg-black opacity-70 md:pt-0 pt-8"></div>
        <div className="md:absolute w-full h-full  md:pt-0">
          <div className="container mx-auto flex justify-center  h-full items-center px-4">
            <div className="z-10 md:text-left text-center container mx-auto ">
              <h1 className="text-white text-center text-2xl capitalize font-black ">
                Indeed, modern economies are predominantly built on dynamism and
                achievements in the fields of mathematics and science.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainEventPage;
