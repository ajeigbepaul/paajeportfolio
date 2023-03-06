import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {experience:Experiences}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[250px] md:w-[350px] xl:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden py-5">
      <motion.img
        src={urlFor(experience?.companyImage).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="flex space-x-2 my-2">{experience?.company}</p>
        <div className="flex">
          {experience.technology.map((tech) => (
            <img
            key={tech?._id}
              src={urlFor(tech?.image).url()}
              className="h-10 w-10 rounded-full"
              alt="cssicon"
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300 text-xs">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 text-sm ml-4">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}