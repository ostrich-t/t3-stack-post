import { signIn } from "next-auth/react";
import React from "react";

export const Auth = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <button
              onClick={() => void signIn("google")}
              className="btn btn-primary mb-2 w-full"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => void signIn("github")}
              className="btn btn-primary mb-2 w-full"
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
