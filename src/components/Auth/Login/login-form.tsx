"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "./useLogin";

export function LoginForm() {
  const { handleLogin, setLoginUserData, userData, setUserData } = useLogin();
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      password: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={
                  setLoginUserData.isLoading ||
                  !userData.email ||
                  !userData.password
                }
              >
                {setLoginUserData.isLoading ? "Loading..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
