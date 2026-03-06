import React from "react";

import { type ClassNameValue, twMerge } from "tailwind-merge";

import plusIcon from "assets/plus.svg";

type Props = {
  onClick?: () => void;
  className?: ClassNameValue;
  ariaLabel?: string;
};

export const AddButton: React.FC<Props> = ({
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={twMerge(
        "inline-flex h-14 min-w-14 items-center justify-center rounded-full bg-button-accent shadow-lg backdrop-blur transition active:scale-95",
        className,
      )}
    >
      <img src={plusIcon} width={32} height={32} />
    </button>
  );
};
