import { useQuery } from "react-query";

const fetchData = async (apifunction) => {
  const response = await apifunction();
  return response.data;
};
const useFetch = (queryKey, api) => {
  return useQuery(queryKey, () => fetchData(api));
};

export default useFetch;
