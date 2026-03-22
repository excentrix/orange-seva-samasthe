// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Define the structure for the image source expected by the urlFor function
interface ImageSource {
  _type: string;
  asset: {
    _ref: string;
  };
}

export const client = createClient({
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

// Update the function signature to use the new ImageSource interface
export function urlFor(source: ImageSource) {
  return builder.image(source);
}
