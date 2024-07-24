"use client";

import { signIn, signOut, useSession } from "next-auth/react";


const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <img
            src={session.user?.image as string}
            alt="User Logo"
            width={50}
            height={50}
            className="rounded-[50%]"
          />
          <h1 className="text-3xl text-green-600">
            Welcome back {session.user?.name}
          </h1>
          <p>{session.user?.email}</p>
          <button
            className="bg-red-600 rounded-md p-2 text-white"
            onClick={() => signOut({ callbackUrl: "/dashboard" })}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <div className="flex space-x-5">
            <button
              onClick={() => signIn("google")}
              className="border border-black"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="border border-red-200"
            >
              Sign in with Github
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
