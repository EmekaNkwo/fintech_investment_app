import { useLoginMutation } from "@/redux/api/authApi";
import { ErrorObject, LoginResponse } from "@/shared/models";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { toast } from "sonner";
const useLogin = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loginUser, setLoginUserData] = useLoginMutation();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response: LoginResponse = await loginUser({
        email: userData.email,
        password: userData.password,
      }).unwrap();

      if (response.status === "success") {
        sessionStorage.setItem("trvyeAccessToken", response.token);
        toast(response.message);
        router.push("/dashboard");
      }
    } catch (error) {
      toast((error as ErrorObject).data.message ?? "An error occured");
      console.error("Login error:", error);
    }
  };

  return { handleLogin, setLoginUserData, userData, setUserData };
};

export default useLogin;
