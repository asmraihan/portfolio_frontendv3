import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
    projectId : process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset : 'asm_portfolio',
    apiVersion : '2022-02-01',
    useCdn : true,
    token : process.env.REACT_APP_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)