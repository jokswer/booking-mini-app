import * as React from "react";

type Props = {
  title: string;
  color?: string;
};

export const Chip: React.FC<Props> = ({ title, color }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        height: 24,
        borderRadius: 8,
        backgroundColor: "rgba(145, 158, 171, 0.08)",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <span
        style={{
          fontSize: 12,
          lineHeight: 18,
          color: "#FFFFFF",
          fontWeight: "700",
        }}
      >
        {title}
      </span>
      <div
        style={{
          height: 6,
          width: 6,
          borderRadius: 6,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
