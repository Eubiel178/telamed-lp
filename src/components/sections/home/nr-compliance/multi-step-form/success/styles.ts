import styled from "styled-components";

export const SuccessMessage = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  .check-icon,
  h2,
  .description {
    & + * {
      margin-top: 16px;
    }
  }

  .check-icon {
    color: var(--purple);
    width: 63.99px;
    height: auto;
  }

  h2 {
    color: var(--foreground);
    font-size: 1.5rem;
  }

  .description {
    color: var(--muted-foreground);
    line-height: 1.5;
  }

  a {
    font-size: 1.125rem;
    /* line-height: 1.75; */
    font-weight: 700;
    width: 100%;
  }
`;
