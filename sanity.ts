import { createClient } from "next-sanity";
import creatImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: "production",
    projectId: "zr0owxdx",
    apiVersion:"2023-02-28",
    useCdn:process.env.NODE_ENV === "production"
}
export const sanityClient = createClient(config)
export const urlFor = (source:any)=>
    creatImageUrlBuilder(config).image(source);
