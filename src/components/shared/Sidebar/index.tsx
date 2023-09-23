import { signOut } from "next-auth/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { type FC } from "react";

export const Sidebar: FC = () => {
  return (
    <div className="min-h-screen w-72 flex-none border-r py-3">
      <ul className="menu rounded-box  w-full bg-base-100">
        <li>
          <h2 className="menu-title">Title</h2>
          <ul>
            <li>
              <Link href="">Item 1</Link>
            </li>
            <li>
              <Link href="">Item 2</Link>
            </li>
            <li>
              <Link href="">Item 3</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="divider"></div>
      <ul className="menu rounded-box w-full bg-base-100">
        <li>
          <div className="flex" onClick={() => void signOut()}>
            <ArrowLeftOnRectangleIcon className="w-6" />
            <div>Sign out</div>
          </div>
        </li>
      </ul>
    </div>
  );
};
