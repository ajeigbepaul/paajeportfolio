import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import urlFor from "@/lib/urlFor";
// import { urlFor } from "@/sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="max-w-full flex flex-col md:flex-row items-center md:items-start justify-center md:py-0  mt-[0px] md:mt-0">
        
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 mt-4 md:mt-0 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover md:rounded-lg md:w-32 md:h-48 xl:w-[200px] xl:h-[300px]"
        src={urlFor(pageInfo?.profilePics).url()}
      />
      <div className="space-y-5 px-2 md:px-10 w-full  max-h-[300px] h-full overflow-y-scroll md:overflow-y-hidden">
        <h4 className=" text-sm md:text-xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f68]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">{pageInfo?.backgroundInformation}</p>
      </div>
      </div>
    </motion.div>
  );
}
