"use client";

import ConfirmationModal from "./ConfirmationModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

const Item = ({ title, close, link, router }) => {
  const handleClick = (link) => {
    router.push(link);
    close();
  };
  return (
    <>
      <div
        onClick={() => handleClick(link)}
        className="flex w-full cursor-pointer items-center justify-center  font-medium text-gray-50 "
      >
        <span>{title}</span>
      </div>
    </>
  );
};

const BasicModal = ({ isOpen, handleClose }) => {
  const router = useRouter();

  return (
    <ConfirmationModal open={isOpen} handleClose={handleClose}>
      <div
        className={`relative flex h-full w-full  flex-col items-center justify-center gap-4 px-5  py-12 text-xl sm:px-10`}
      >
        <button
          aria-label="close modal"
          onClick={handleClose}
          className="absolute right-[1rem] top-2 flex justify-end py-2 font-bold"
        >
          <IoIosCloseCircleOutline
            color="white"
            fontSize={32}
          ></IoIosCloseCircleOutline>
        </button>
        <Item
          close={handleClose}
          router={router}
          link={"/"}
          title={"Startseite"}
        ></Item>
        <Item
          close={handleClose}
          router={router}
          link={`/impressum`}
          title={"Impressum"}
        ></Item>
        <Item
          close={handleClose}
          router={router}
          link={`/datenschutz_und_richtlinien`}
          title={"Datenschutz & richtlinien"}
        ></Item>
      </div>
    </ConfirmationModal>
  );
};

export default BasicModal;
