import * as React from "react";

type Props = {
  onClick?: () => void;
  title?: string;
  enabled?: boolean;
  grey?: boolean;
};

export const Button: React.FC<Props> = ({
  onClick,
  title,
  enabled = true,
  grey = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      style={{
        flex: 1,
        backgroundColor: grey ? "rgba(145, 158, 171, 0.12)" : "#E94817",
        height: 48,
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: 15,
          lineHeight: 26,
          color: "#FFFFFF",
        }}
      >
        {title}
      </span>
    </button>
  );
};
