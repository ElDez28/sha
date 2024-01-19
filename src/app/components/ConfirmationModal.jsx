"use client";

import { useEffect } from "react";
import ReactPortal from "./ReactPortal";

const ConfirmationModal = ({ open, handleClose, children }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      e.key === "Escape" ? handleClose() : null;
      document.body.addEventListener("keydown", closeOnEscapeKey);
    };
    return () => {
      document.body.addEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className={`fixed left-0 top-0 z-50 box-border flex h-screen w-full flex-col bg-primary py-5 transition-all duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="mx-auto  box-border flex h-full w-full max-w-4xl overflow-y-scroll  ">
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default ConfirmationModal;
