import React from "react";
import { useUIStore } from "~/store/uiStore";

export const Loading = () => {
  const loading = useUIStore((state) => state.loading);

  if (!loading) return <></>;
  return (
    <div className="fixed z-20 grid h-screen w-screen place-items-center bg-slate-300/50 text-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};
