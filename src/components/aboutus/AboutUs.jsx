import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";

function AboutUs() {
  return (
    <div
      className="w-full h-auto grid grid-cols-5 items-center gap-4 p-10 py-12 max-sm:grid-cols-1"
      id="aboutus"
    >
      <div className="w-full h-full grid col-span-2 items-center gap-4">
        <p className="font-bold text-5xl max-sm:text-3xl">
          Why Choose IronFit Services
        </p>
        <div className="w-full h-full flex flex-col gap-1">
          <div className="w-full h-full flex items-center gap-2">
            <IoIosCheckmark className="w-6 h-6 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full" />
            <span className="font-bold text-2xl max-sm:text-xl">
              Personal Training
            </span>
          </div>
          <p className="font-extralight text-xl max-sm:text-base">
            Our personal trainers can help you create a personalized fitness
            plan and track your progress.
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-1">
          <div className="w-full h-full flex items-center gap-2">
            <IoIosCheckmark className="w-6 h-6 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full" />
            <span className="font-bold text-2xl max-sm:text-xl">
              Expert Trainer
            </span>
          </div>
          <p className="font-extralight text-xl max-sm:text-base">
            Our gym is proud to offer a team of healthy skilled and certified
            trainer help achieve your health and fitness goals.
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-1">
          <div className="w-full h-full flex items-center gap-2">
            <IoIosCheckmark className="w-6 h-6 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full" />
            <span className="font-bold text-2xl max-sm:text-xl">
              Flexible Time
            </span>
          </div>
          <p className="font-extralight text-xl max-sm:text-base">
            There are many fitness classes that are offered during off-peak
            hours, such as early morning or late evening.
          </p>
        </div>
        <button className="w-40 h-12 py-3 px-8 bg-red-500 rounded-md">
          Get Started
        </button>
      </div>
      <div className="w-full h-full grid col-span-3 grid-cols-4 grid-rows-2 gap-2">
        <img
          src="/assets/personal-training.jpg"
          alt="Personal trainer"
          className="w-full h-full object-cover col-span-2 row-span-2 "
        />
        <img
          src="/assets/personal-training-3.jpg"
          alt="Personal trainer"
          className="w-full h-full object-cover col-span-2"
        />
        <img
          src="/assets/personal-training-5.jpg"
          alt="Personal trainer"
          className="w-full h-full object-cover"
        />
        <img
          src="/assets/personal-trainig-2.jpg"
          alt="Personal trainer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default AboutUs;
