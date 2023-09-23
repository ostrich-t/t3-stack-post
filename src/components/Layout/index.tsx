import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useState, type FC, type PropsWithChildren } from "react";
import { Auth } from "../templates/Auth";
import { Navbar } from "../shared/Navbar";
import { Sidebar } from "../shared/Sidebar";
import { usePostStore } from "~/store/post";
import { PostDialog } from "../shared/dialogs/PostDialog";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(true);

  const openCreateDialog = usePostStore((state) => state.openCreateDialog);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen" data-theme="light">
        {session ? (
          <>
            <div className="flex">
              {isOpen && <Sidebar />}
              <div className="w-full">
                <Navbar
                  onClickBar={() => setIsOpen(!isOpen)}
                  createProps={{
                    onShortClick: openCreateDialog,
                  }}
                />
                {children}
              </div>
            </div>
            <PostDialog />
          </>
        ) : (
          <Auth />
        )}
      </main>
    </>
  );
};
