import React from "react";
import { Modal } from "@mui/material";
// import tw from "twin.macro";
import Efficient from "./Efficient";

const EfficientModel = ({ open, close }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ padding: 1 }}
      >
        {/* <StyledModal> */}
        <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1057px] w-full px-6 shadow-box min-h-min bg-white">
          <Efficient />
        </div>
        {/* </StyledModal> */}
      </Modal>
    </div>
  );
};

export default EfficientModel;

// const StyledModal = tw.div`
// flex
// flex-col
// absolute inset-0
// m-auto
// bg-white
// max-w-[1057px] w-full
// px-6
// shadow-box
// min-h-min
// `;
