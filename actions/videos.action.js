"use server";

import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function getVideosS3() {
  try {
    const url = `${BASE_API_URL}/videos/getVideos`;
    console.log("Fetching videos from:", url);

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.videos || [];
  } catch (error) {
    console.error("❌ Error fetching videos:", error.message);
    return [];
  }
}
