import React from "react";
import { useDispatch } from "react-redux";
import { patchSaved } from "../../features/Save/SaveSlice";

const Saved = ({ id }) => {
  const dispatch = useDispatch();

  const saveHandeler = () => {
    dispatch(patchSaved(id));
  };
  return (
    <>
      <button
        onClick={saveHandeler}
        class="active save-btn"
        id="lws-singleSavedBtn"
      >
        <i class="fa-regular fa-bookmark"></i> Saved
      </button>
    </>
  );
};

export default Saved;
