import GetMedia from "@/requests/media-files.request";
import PageContent from "./page.content";

export default async function Home() {
  const mediaData = await GetMedia();

  return <PageContent mediaData={mediaData.data} />;
}
