"use client";

import React from "react";

type Props = {
  mask: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string;
  placeholder?: string;
};

export function InputMask({
  name,
  mask,
  value = "",
  placeholder,
  onChange,
}: Props) {
  function format(value: string, mask: string) {
    const numbers = value.replace(/\D/g, "");
    let result = "";
    let numberIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      const maskChar = mask[i];

      if (maskChar === "9") {
        if (!numbers[numberIndex]) break;

        result += numbers[numberIndex];
        numberIndex++;
      } else {
        if (numbers[numberIndex]) {
          result += maskChar;
        }
      }
    }

    return result;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;
    const formatted = format(rawValue, mask);

    e.target.value = formatted;

    onChange(e);
  }

  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
