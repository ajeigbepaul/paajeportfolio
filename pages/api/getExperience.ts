import type { NextApiRequest,NextApiResponse } from "next";
import {groq} from "next-sanity"
import { client } from "@/lib/sanity.client";

// import { sanityClient } from "@/sanity";
import { Experiences } from "@/typings";

const query = groq`
*[_type == "experience"]{
    ...,technology[]->
}`;
type Data = {
    experiences:Experiences[]
}
export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const experiences:Experiences[] = await client.fetch(query)
    res.status(200).json({experiences})
}