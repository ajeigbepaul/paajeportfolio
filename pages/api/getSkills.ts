import type { NextApiRequest,NextApiResponse } from "next";
import {groq} from "next-sanity"
import { client } from "@/lib/sanity.client";

// import { sanityClient } from "@/sanity";
import { Skills } from "@/typings";

const query = groq`
*[_type == "skills"]`;
type Data = {
    skills:Skills[]
}
export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const skills:Skills[] = await client.fetch(query)
    res.status(200).json({skills})
}