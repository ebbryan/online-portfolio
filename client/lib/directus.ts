import { createDirectus, rest } from "@directus/sdk";
const directusBaseUrl = process.env.DIRECTUS_BASE_URL as string;
export const directus = createDirectus(directusBaseUrl).with(rest());
