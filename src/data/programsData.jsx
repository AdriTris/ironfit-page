import { IoMdFitness } from "react-icons/io";
import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";

export const programsData = [
  {
    image: <IoMdFitness className="w-16 h-16" />,
    title: "Strength Training",
    details:
      "Our trainers will design that a progressive workout plans that proper achieve gains strength.",
  },
  {
    image: <GrYoga className="w-16 h-16" />,
    title: "Basic Yoga",
    details:
      "This program combines yoga with cardio strength training to help lose weight and fitness.",
  },
  {
    image: <GiMuscleUp className="w-16 h-16" />,
    title: "Body Building",
    details:
      "For those looking to increase strength build lean muscle or strength and muscle.",
  },
  {
    image: <FaRunning className="w-16 h-16" />,
    title: "Weight Loss",
    details:
      "Our weight loss programs are designed to help you make sustainable lifestyle.",
  },
];
