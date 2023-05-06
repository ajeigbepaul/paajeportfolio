import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ajeigbepaul@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[10px] text-gray-500 text-xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-6">
        <h4 className="text-sm md:text-xl font-semibold text-center pt-20 hidden md:block">
          I have got just what you need.{" "}
          <span className="decoration-[#f68]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#f68] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xs">+2348104560227</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#f68] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xs">pdave4krist@yahoo.com</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#f68] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xs">Avera Estate Ajah Lagos</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2 ">
            <input
              className="contactInput w-6/12"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="contactInput w-6/12"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#f68] py-2 px-2 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
