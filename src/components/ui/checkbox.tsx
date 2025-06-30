import React from "react";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  children?: React.ReactNode;
}

const getInputClasses = (checked: boolean, disabled : boolean, indeterminate: boolean) => {
  let className = "relative border w-4 h-4 duration-200 rounded inline-flex items-center justify-center";
  if (disabled) {
    if (!checked || indeterminate) {
      className += " bg-gray-100 border-gray-500";
      if (indeterminate) {
        className += " stroke-gray-500"
      } else {
        className += " fill-gray-100 stroke-gray-100"
      }
    } else {
      className += " bg-gray-600 border-gray-600 fill-gray-600 stroke-gray-100";
    }

  } else {
    if (!checked || indeterminate) {
      className += " bg-background-100 border-gray-700 group-hover:bg-gray-200"
      if (indeterminate) {
        className += " stroke-gray-700"
      } else {
        className += " fill-background-100 stroke-background-100 group-hover:stroke-gray-200 group-hover:fill-gray-200"
      }
    } else {
      className += " bg-gray-1000 border-gray-1000";
    }
  }

  return className;
};

export const Checkbox = ({ checked = false, onChange, disabled = false, indeterminate = false, children }: CheckboxProps) => {
  return (
    <label
      className={`flex items-center cursor-pointer text-[13px] font-sans group ${disabled ? "text-gray-500" : "text-gray-1000"}`}
      style={{ width: '100%' }}
    >
      <span className="relative inline-flex items-center justify-center w-4 h-4 flex-shrink-0">
        <input
          disabled={disabled}
          type="checkbox"
          checked={checked}
          onChange={() => onChange && !indeterminate && onChange(!checked)}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          tabIndex={0}
        />
        <span className={getInputClasses(checked, disabled, indeterminate)}>
          <svg
            className="shrink-0 align-middle"
            height="16"
            viewBox="0 0 20 20"
            width="16"
          >
            {indeterminate ? (
              <line
                stroke="#222"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                x1="4"
                x2="16"
                y1="10"
                y2="10"
              />
            ) : checked ? (
              <polyline
                points="4,11 8,15 16,6"
                stroke="#222"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : null}
          </svg>
        </span>
      </span>
      <span className="ml-2 flex-1 break-words">{children}</span>
    </label>
  );
};
