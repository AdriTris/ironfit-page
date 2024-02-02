"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Join() {
  const form = useRef();

  const notifySuccess = () => toast.success("Information was sent.");
  const notifyError = () =>
    toast.error("Please, complete all fields in the form.");

  const sendEmail = (e) => {
    e.preventDefault();

    if (formularioCompleto()) {
      emailjs
        .sendForm(
          "service_ptr10rt",
          "template_xd9r0w8",
          form.current,
          "5k97QQ83L-JEslq9-"
        )
        .then(
          (result) => {
            console.log(result.text);
            notifySuccess();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      notifyError();
    }
  };

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formularioCompleto = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div className="w-full h-full grid grid-cols-2 gap-4 bg-zinc-700 p-10 py-12 max-sm:grid-cols-1">
      <h1 className="text-5xl font-bold leading-relaxed max-sm:text-3xl max-sm:leading-normal">
        Are You Ready To Join To IronFit?
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-xl text-black"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-xl text-black"
        />
        <button className="w-full h-12 py-3 px-8 bg-red-500 rounded-md">
          Join Now
        </button>
        <Toaster position="top-center" />
      </form>
    </div>
  );
}

export default Join;
