"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import GoogleSignIn from "./GoogleSignIn.jsx";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userSession } from "@/actions/auth.action.js";

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await userSession();
      if (session) {
        router.push("/");
      }
    };
    checkSession();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="container flex h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-lg shadow-md">
        <CardHeader className="space-y-3 text-center">
          <img
            src="/ResQAlert with Title-01.svg"
            alt="App Logo"
            className="mx-auto h-20 w-20"
          />
          <CardTitle className="text-2xl font-semibold">
            Sign in to your account
          </CardTitle>
          <CardDescription>
            Use your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase text-muted-foreground bg-background px-2">
                or
              </div>
            </div>
          </CardFooter>
        </form>
        <GoogleSignIn />
        <div className="w-full max-w-md mx-auto px-5 py-2">
          <Button variant="outline" className="w-full">
            <img
              src="/icons8-microsoft-48.png"
              alt="App Logo"
              className="h-5 w-5 mr-2"
            />
            Continue with Microsoft
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
