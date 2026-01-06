import { getDocs, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";

const getVideos = async () => {
  try {
    const colRef = collection(db, "videos");
    const querySnapshot = await getDocs(colRef);
    const videos = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(videos);
    return videos;
  } catch (error) {
    console.error(error);
  }
};

export { getVideos };
