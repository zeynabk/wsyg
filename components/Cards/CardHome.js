import { Fragment } from "react";
import FontAwesome from "../fontAwesome/fontAwesome";
import allData from "../../data";
const Card = () => {
  return (
    <Fragment>
      {allData.map((data, index) => (
        <>
          {data.id === "02" ? (
            <div
              key={data.id || index}
              className="bg-white text-noir  py-3 rounded-md filter drop-shadow"
            >
              <div className="w-11/12 m-auto">
                <div className="text-left py-2 ">
                  <FontAwesome className="" icon={data.icon} />
                </div>
                <div className="">
                  <h1 className="font-black text-xl my-2">{data.title}</h1>
                  <ol className="list-decimal text-noir max-h-56 overflow-auto">
                    <li>
                      AIMS-WPSYG wishes to engage in specific, measurable,
                      achievable, realistic and time-bound objectives including.{" "}
                    </li>
                    <li>- Organizing of public lectures in High Schools. </li>
                    <li>
                      - Organizing regional and Inter-High Schools mathematical
                      quizzes.
                    </li>
                    <li>
                      - Organizing annual international workshops in African
                      countries to create an avenue for AIMS alumni to present
                      their research projects to young female scientists in
                      colleges, high schools and universities.
                    </li>
                    <li>
                      - Organizing annual Olympiads in data science.Providing
                      mentorship from AIMS students and alumni to High school
                      students.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={data.id || index}
              className="bg-white   text-noir  py-3 rounded-md filter drop-shadow"
            >
              <div className="w-11/12 m-auto">
                <div className="text-left py-2 ">
                  <FontAwesome className="" icon={data.icon} />
                </div>
                <div className="">
                  <h1 className="font-black text-xl my-2">{data.title}</h1>
                  <div className="text-noir overflow-auto max-h-56">
                    {data.description}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </Fragment>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allData,
    },
  };
}
export default Card;
