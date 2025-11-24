import { directus } from "@/lib/directus";
import { readFiles } from "@directus/sdk";

export default async function GetMedia() {
  try {
    const result = (await directus.request(readFiles())) as TMediaDataTypes[];
    return { data: result, success: true };
  } catch (error) {
    return { message: "ERROR", success: false };
  }
}
