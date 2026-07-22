import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();

      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlogs();
  }, []);

  return {
    blogs,
    loading,
    refresh: fetchBlogs,
  };
};

export default useBlogs;
