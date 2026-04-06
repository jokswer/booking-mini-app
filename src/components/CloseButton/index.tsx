import React from "react";

import closeIcon from "assets/close.svg";

type Props = {
  onClose: () => void;
};

export const CloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        verticalAlign: "center",
        height: 36,
        width: 36,
        padding: 12,
      }}
      onClick={onClose}
    >
      <img src={closeIcon} />
    </button>
  );
};
