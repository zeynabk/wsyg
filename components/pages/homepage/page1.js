import Image from "next/image";
import Link from "next/link";
import ButtonBeize from "../../layout/ButtonBeize";
import CardHome from "../../Cards/CardHome";
import ParaCurved from "../../tricks/ParaCurved";
import Partners from "../../Cards/Partners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const FirstPage = () => {
  return (
    <>
      <div className="py-5">
        <div className=" grid sm:grid-cols-5 gap-5 container mx-auto px-4 ">
          <div className="sm:col-span-3  flex flex-col  justify-center ">
            <div className="">
              <div className="text sm:w-2/3 w-full  ">
                <h1 className="font-black lg:text-4xl md:text-3xl text-3xl sm:text-left text-center leading-tight mb-12	">
                  Women Promoting Science To The Younger Generation
                </h1>
              </div>
              <p className="text-xl my-7 sm:pr-5 pr-0 sm:text-left text-center leading-relaxed">
                WPSYG has a vision of an African continent where the majority of
                the population are engaged in mathematics and science related
                careers and a continent whose development agenda is driven by
                mathematics and science
              </p>
              <div className="btn grid sm:grid-cols-2 md:gap-4 gap-2">
                <Link href="/contact">
                  <a className="border text-center rounded-md bg-white  text-black lg:px-12 md:px-2  py-2 hover:bg-gray-200 font-semibold">
                    Join Us
                  </a>
                </Link>
                {/* <ButtonBeize name='Volunter With Us' /> */}
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 flex justify-center items-center">
            <Image
              src="/img/img3.svg"
              alt="robotic"
              layout="intrinsic"
              objectFit="container"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </div>
      <div className="text-center shadow lg:mb-16 md:mb-4  mb-8 md:w-3/12 w-5/12 m-auto py-12 bg-white text-noir border rounded-3xl">
        <FontAwesomeIcon icon="cog" size="4x" className="" />
      </div>
      <div className=" container mx-auto px-4">
        <ParaCurved />
        <div className="description md:w-2/3 w-full tracking-wider leading-loose">
          WPSYG is an association that is focused on igniting and sustaining the
          interest of the youth in general and girls in particular in
          mathematics and science with the aim of getting them to develop career
          in this field to enable them compete globally and solve the local
          development challenges in their communities.
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 container mx-auto px-4 my-8">
        <CardHome />
      </div>
      <h1 className="text-white md:text-2xl text-center text-xl font-black container mx-auto mb-8">
        Partners
      </h1>
      <div className="grid grid-cols-1 justify-center items-center px-4">
        {/* <Partners /> */}

        <div className="relative flex justify-center">
          <Image
            src="/partner/partner.jpg"
            // layout="fill"
            width="350"
            height="350"
            objectFit="cover"
            objectPosition="bottom"
            alt="group"
            className="rounded"
          />
        </div>
        <div className="text-center my-4 text-lg">Enter your text here</div>
      </div>
    </>
  );
};

export default FirstPage;
