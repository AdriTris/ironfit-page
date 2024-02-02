"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { testimonialsData } from "../../data/testimonialsData";

function Testimonials() {
  const [indice, setIndice] = useState(0);

  const transition = { type: "spring", duration: 3 };

  const cambiarTestimonio = (direccion) => {
    if (direccion === "adelante") {
      setIndice((prevIndice) =>
        prevIndice === testimonialsData.length - 1 ? 0 : prevIndice + 1
      );
    } else {
      setIndice((prevIndice) =>
        prevIndice === 0 ? testimonialsData.length - 1 : prevIndice - 1
      );
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center gap-8 px-16 py-12"
      id="testimonials"
    >
      <div className="w-full h-full flex gap-8 max-sm:flex-col">
        <div className="w-2/3 h-80 flex flex-col gap-8 max-sm:w-full max-sm:h-full">
          <p className="text-2xl font-bold text-center max-sm:text-xl">
            TESTIMONIALS
          </p>
          <h3 className="text-5xl font-bold max-sm:text-3xl">
            What Our Happy Clients Say About Us
          </h3>
          <div className="h-full w-full flex flex-col justify-between max-sm:gap-4">
            <div className="flex flex-col gap-4">
              <motion.p
                key={indice}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="text-xl font-light max-sm:text-base"
              >
                {testimonialsData[indice].review}
              </motion.p>
              <p className="text-xl font-semibold max-sm:text-base">
                {testimonialsData[indice].name}
              </p>
            </div>
            <div className="flex gap-3">
              <IoIosArrowRoundBack
                className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"
                onClick={() => cambiarTestimonio("atras")}
              />
              <IoIosArrowRoundForward
                className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"
                onClick={() => cambiarTestimonio("adelante")}
              />
            </div>
          </div>
        </div>
        <motion.div
          key={indice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="w-1/3 h-60 max-sm:w-full "
        >
          <img
            src={testimonialsData[indice].image}
            alt="Client"
            className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
