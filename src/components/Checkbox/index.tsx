import * as React from "react";

import checkboxActive from "assets/checkboxActive.svg";
import checkboxInactive from "assets/checkboxInactive.svg";

type Props = {
  selected: boolean;
  text: string;
  onClick: () => void;
};

export const Checkbox: React.FC<Props> = ({ selected, text, onClick }) => {
  return (
    <div
      key={text}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: 8,
        }}
        onClick={onClick}
      >
        <img src={selected ? checkboxActive : checkboxInactive} />
      </button>
      <p
        style={{
          fontSize: 14,
          fontWidth: "500",
          color: "#FFFFFF",
        }}
      >
        {text}
      </p>
    </div>
  );
};
