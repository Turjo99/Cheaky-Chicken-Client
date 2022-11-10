import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Cheaky Chicken`;
  }, [title]);
};
export default useTitle;
