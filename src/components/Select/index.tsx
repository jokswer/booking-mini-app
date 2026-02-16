import React, { memo, useMemo } from "react";
import BaseSelect, { type StylesConfig } from "react-select";
import { twMerge, type ClassNameValue } from "tailwind-merge";

type Option = { value: string; label: string };
type Props = {
  options: Option[];
  className?: ClassNameValue;
} & Omit<React.ComponentProps<typeof BaseSelect>, "options">;

const SelectComponent: React.FC<Props> = ({ className, options, ...rest }) => {
  const styles = useMemo<StylesConfig<Option, false>>(
    () => ({
      control: (provided) => ({
        ...provided,
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        minHeight: 0,
      }),
      menu: (provided) => ({
        ...provided,
        padding: 0,
        borderRadius: 16,
        backgroundColor: "var(--color-primary-bg)",
        overflow: "hidden",
        minWidth: 86,
      }),
      option: (provided, state) => ({
        ...provided,
        padding: "8px 12px",
        color: "var(--color-primary-text)",
        backgroundColor: state.isSelected
          ? "var(--color-secondary-bg)"
          : state.isFocused
            ? "var(--color-secondary-bg)"
            : "transparent",
        cursor: "pointer",
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: 0,
        color: "var(--color-secondary-bg)",
      }),
      indicatorSeparator: () => ({ display: "none" }),
      valueContainer: (provided) => ({
        ...provided,
        padding: 0,
        paddingRight: 8,
      }),
      singleValue: (provided) => ({
        ...provided,
        margin: 0,
        color: "var(--color-primary-text)",
      }),
      placeholder: (provided) => ({
        ...provided,
        margin: 0,
        color: "var(--color-secondary-text)",
        opacity: 0.7,
      }),
    }),
    [],
  );

  return (
    <div
      className={twMerge(
        "py-2.5 px-4 bg-secondary-bg rounded-lg min-w-21.5",
        className,
      )}
    >
      <BaseSelect
        isSearchable={false}
        options={options}
        classNamePrefix="custom-select"
        className="w-full text-sm m-0 p-0"
        styles={styles}
        {...rest}
      />
    </div>
  );
};

export const Select = memo(SelectComponent);
