import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const reponse = await client.api.auth.logout["$post"]();
      return await reponse.json();
    },
  });

  return mutation;
};
