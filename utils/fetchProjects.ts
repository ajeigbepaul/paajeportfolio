// import { Project } from "@/typings";
// export const fetchProjects = async()=>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
//     const data = await res.json()
//     const projects:Project[] = data.projects
//     return projects
// }
import { Project } from "@/typings";

export const fetchProjects = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch projects from ${url}`);
    }

    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
};
