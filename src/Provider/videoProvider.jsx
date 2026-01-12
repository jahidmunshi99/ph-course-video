import { useContext, useState, useEffect } from "react";
import { VideoContext } from "../context";
import {getVideos} from "../FetchData/getPosts"

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([""])

 

  {/* Fetch Data*/}
  useEffect(()=>{
    const request = async ()=>{
      const data = await getVideos();
      setVideos(data);
    }
    request();
  },[])

  return <VideoContext.Provider value={{videos}}>{children}</VideoContext.Provider>;
};

const UseVideoProvider = ()=> useContext(VideoContext)

export {UseVideoProvider};
