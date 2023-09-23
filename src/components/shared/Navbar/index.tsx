import Image from "next/image";
import { Bars3Icon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React, { type FC } from "react";
import Link from "next/link";

interface Props {
  onClickBar: () => void;
  createProps: {
    onShortClick: () => void;
  };
}

export const Navbar: FC<Props> = ({ onClickBar, createProps }) => {
  return (
    <div className="navbar border-b border-slate-200 bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={onClickBar}>
          <Bars3Icon className="inline-block h-5 w-5 stroke-current" />
        </button>
      </div>
      <div className="flex-1">
        <Link href={"/"} className="text-xl font-semibold normal-case">
          Ostrich
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">
            <PencilSquareIcon className="inline-block h-5 w-5 stroke-current" />
            Post
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a onClick={createProps.onShortClick}>Short</a>
            </li>
          </ul>
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <Image
                alt="user icon"
                src="/ostrich_admin.png"
                width={500}
                height={500}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href={"/"} className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link href={"/"}>Settings</Link>
            </li>
            <li>
              <Link href={"/"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
