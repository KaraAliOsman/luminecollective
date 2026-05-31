import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

/**
 * Generates an optimised Sanity CDN image URL.
 * Usage: urlFor(image).width(800).format("webp").url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
