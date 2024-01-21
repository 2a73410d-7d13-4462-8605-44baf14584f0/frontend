import { queryClient } from "@/pages/_app";
import { Axios } from "@/utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { IGetDetailShort, IGetStatistics, IPostGenerate } from "./interface";

const url = "/transform-url";
const user = Cookies.get("user");

const getStatistics = async (): Promise<IGetStatistics> => {
  const { data } = await Axios.get(`${url}/statistics?user=${user}`);
  return data;
};

export const useStatistics = () => {
  return useQuery({
    queryKey: ["statistics-list"],
    queryFn: () => getStatistics(),
  });
};

const postGenerateURL = async (short: string): Promise<IPostGenerate> => {
  const { data } = await Axios.post(url, {
    url: short,
    name: user,
  });
  return data;
};

export const useGenerateURL = () => {
  return useMutation({
    mutationKey: ["transform-url"],
    mutationFn: (short: string) => postGenerateURL(short),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["statistics-list"] });
    },
  });
};

const getDetailShort = async (short: string): Promise<IGetDetailShort> => {
  try {
    const { data } = await Axios.get(
      `${url}/detail?short=${short}&name=${user}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const useGetDetailShort = ({ short }: { short: string }) => {
  return useQuery({
    queryKey: ["detail-short"],
    queryFn: () => getDetailShort(short),
  });
};
