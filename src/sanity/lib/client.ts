import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId } from "../env";

// Create the Sanity client
export const client = createClient({
  apiVersion,
  dataset,
  projectId,   
  useCdn: true, 
});

// Create an image URL builder
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);
