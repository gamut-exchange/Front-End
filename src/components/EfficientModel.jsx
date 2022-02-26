import React, { useContext } from "react";
import { Modal } from "@mui/material";
import Efficient from "./Efficient";
import { AppContext } from "./context";

const EfficientModel = ({ open, close }) => {
  const { dark } = useContext(AppContext);
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ padding: 1 }}
      >
        <div className={dark ? "dark" : "light"}>
          <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[calc(100vw-40px)] md:max-w-[1057px] md:h-auto h-[calc(100vh-100px)] w-full px-0 md:px-6 shadow-box  bg-white dark:bg-dark-primary overflow-y-scroll no-scrollbar">
            <div className="">
              <Efficient />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EfficientModel;
