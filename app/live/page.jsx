import { auth } from "@/auth";
import { getVideosS3 } from "../../actions/videos.action";
import VideoCard from "../components/VideoCard";

export default async function LivePage() {
  const session = await auth();
  const videoDetails = await getVideosS3();
  console.log("Session:", session?.user);
  console.log("Video Details:", videoDetails);
  return (
    <div className="container mx-auto p-4">
      <h1>Live Page</h1>
      <p>This is a live page that can be updated in real-time.</p>
      {videoDetails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoDetails?.map((video, index) => (
            <VideoCard key={index} videoUrl={video.url} />
          ))}
        </div>
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
} 