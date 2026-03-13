"use client";

type Props = {
  name: string;
  options: string[];
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

import * as S from "./styles";

export function RadioGroup({ name, options, value, onChange }: Props) {
  return (
    <S.RadioGroup>
      {options.map((option) => (
        <label key={option} className={`${value === option ? "active" : ""}`}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
          />

          <span className="radio-circle"></span>

          <span className="radio-text">{option}</span>
        </label>
      ))}
    </S.RadioGroup>
  );
}
