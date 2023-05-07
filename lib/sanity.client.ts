import {createClient} from "next-sanity";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zr0owxdx';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-07';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn:false,
})