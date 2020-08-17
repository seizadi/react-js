import {useState, useEffect, useCallback} from "react";
import VideoService from "../services/VideoService";
import GetApiKeys from "../GoogleApi";

const useVideos = (defaultSearchTerm) => {
  const videoSvc = new VideoService(GetApiKeys().accessKey);
  const [videos, setVideos] = useState([]);

  // Async method could not get this to work!
  const videoSearch = useCallback( (term) => {
    const searchSubmit = async (term) => {
      const response = await videoSvc.getVideos(term);

      setVideos(response.data.items);
    };

    searchSubmit(term);
  }, [videoSvc]);

  useEffect( () => {
    videoSearch(defaultSearchTerm);
  }, [defaultSearchTerm, videoSearch]);

  return [videos, videoSearch];
};

export default useVideos;
