import { Axios } from "@/utils/axios";
import { url } from "../api-config";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/pages/_app";

const postCreateUser = async () => {
  try {
    const { data } = await Axios.post(`${url}user`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const useCreateUser = () => {
  return useMutation({
    mutationKey: ["create-user"],
    mutationFn: postCreateUser,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['statistics-list']})
    }
  });
};
