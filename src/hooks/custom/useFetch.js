import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    (async () => {
      setFinish(false);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setFinish(true);
    })();
  }, [url]);
  return { data, finish };
};

export default useFetch;
