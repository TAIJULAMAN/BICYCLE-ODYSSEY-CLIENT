import { useQuery } from "react-query";

const useParts = () => {
  const {isLoading, data: part, refetch } = useQuery(["products"], () =>
    fetch(`https://bicycle-odyssey-server.onrender.com/parts`).then((res) => res.json())
  );
  return [isLoading, part, refetch];
};

export default useParts;
