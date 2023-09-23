import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { type FC, type PropsWithChildren } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  closeOutside?: boolean;
}
export const Dialog: FC<PropsWithChildren<Props>> = ({
  open,
  handleClose,
  closeOutside = true,
  children,
}) => {
  if (!open) {
    return <></>;
  }
  return (
    <div onClick={closeOutside ? handleClose : undefined}>
      <dialog open id="my_modal_1" className="modal modal-open">
        <div
          className="modal-box"
          onClick={closeOutside ? (e) => e.stopPropagation() : undefined}
        >
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={handleClose}
          >
            <XMarkIcon className="w-6" />
          </button>
          {children}
        </div>
      </dialog>
    </div>
  );
};
