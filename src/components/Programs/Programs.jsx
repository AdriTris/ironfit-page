import { programsData } from "../../data/ProgramsData";
import { IoIosArrowRoundForward } from "react-icons/io";

function Programs() {
  return (
    <div
      className="w-full h-full grid items-center gap-4 bg-zinc-700 p-10 py-12 max-sm:gap-6"
      id="programs"
    >
      <div className="w-full h-32 flex justify-between items-center gap-24 max-sm:flex-col max-sm:h-full max-sm:gap-4">
        <div className="w-1/2 h-full max-sm:w-full">
          <p className="font-bold text-5xl max-sm:text-3xl">
            The Best Programs We Offers For You
          </p>
        </div>
        <div className="w-1/2 h-full max-sm:w-full">
          <p className="font-light text-xl max-sm:text-base">
            We offer a wide range of comprehensive fitness programs designed to
            cater to individuals all of fitness levels. Our aim to help your
            achieve specific goals and maximize results.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-center w-full h-full max-sm:grid-cols-1 max-sm:gap-4">
        {programsData.map((program) => (
          <div
            className="w-72 h-full bg-zinc-500 rounded-lg p-6 flex flex-col justify-center gap-4 cursor-pointer hover:bg-gradient-to-tr from-orange-600 to-red-500 shadow-xl max-sm:w-full"
            key={program.title}
          >
            <figure className="w-16 h-16">{program.image}</figure>
            <span className="font-semibold text-2xl max-sm:text-xl">
              {program.title}
            </span>
            <p className="font-extralight text-md max-sm:text-sm">
              {program.details}
            </p>
            <div className="flex items-center">
              <p>Get Started</p>
              <IoIosArrowRoundForward className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
