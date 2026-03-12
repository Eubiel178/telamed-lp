import styled from "styled-components";

export const RadioGroup = styled("div")`
  display: flex;
  gap: 20px;
  flex-direction: column;

  label {
    display: flex;
    gap: 12px;
    align-items: center;

    padding: 9.4px 12px;

    color: var(--foreground);
    background: var(--muted50);

    border: 1px solid var(--border-color);
    border-radius: 12px;

    cursor: pointer;

    transition: var(--transition);

    font-size: 0.875rem;
    font-weight: 500;

    &:hover {
      background: var(--muted);
    }

    &.active {
      background: var(--purple10);
      border-color: var(--purple);

      .radio-circle {
        &::after {
          content: "";

          width: 9px;
          height: 9px;

          background: var(--purple);
          border-radius: 50%;

          position: absolute;

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
        }
      }
    }

    input {
      display: none;
    }

    .radio-circle {
      width: 18px;
      height: 18px;

      border-radius: 50%;
      border: 2px solid var(--muted-foreground);
      position: relative;
    }
  }
`;
