import { ReactNode, useEffect } from "react";
import { Header } from "./header";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import { useCreateUser } from "@/utils/api-service/user";

interface IProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: IProps) => {
  const cookies = Cookies;
  const { data, mutate, isSuccess } = useCreateUser();

  const username = cookies.get("user");

  useEffect(() => {
    if (!username) {
      mutate();
    }
    return () => {};
  }, [username, mutate]);

  if (isSuccess) cookies.set("user", data.name);

  return (
    <div className={inter.className}>
      <Header />
      <div className="p-5">{children}</div>
    </div>
  );
};
