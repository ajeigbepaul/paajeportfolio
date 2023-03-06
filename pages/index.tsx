import About from '@/components/About'
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Skillz from '@/components/Skillz';
import { Experiences, PageInfo, Project, Skills, Social } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperience';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link';
type Props = {
  pageInfo:PageInfo;
  experiences:Experiences[];
  skills:Skills[];
  socials:Social[];
  projects:Project[];     
}
// {pageInfo, experiences, projects, skills, socials}:Props
export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overlow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80 scrollbar-thin">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center relative pt-36">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center pb-10">
        <Experience experiences={experiences}/>
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skillz skills={skills}/>
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media.licdn.com/dms/image/D4D03AQHbxztwXVOIQg/profile-displayphoto-shrink_800_800/0/1675335118967?e=1680739200&v=beta&t=rUW95sRj7sazP0nPWvGSmQiN6DbZ276dRq3xBaMEotY"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
export const getStaticProps:GetStaticProps<Props>=async () =>{
const pageInfo:PageInfo = await fetchPageInfo()
const experiences:Experiences[] = await fetchExperiences()
const skills:Skills[] = await fetchSkills()
const projects:Project[] = await fetchProjects()
const socials: Social[] = await fetchSocials()

return{
  props:{
    pageInfo,
    experiences,
    skills,
    projects,
    socials
  },
  revalidate:10,
}
}