import styled from "styled-components";

export const Faq = styled("section")`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 64px 0;
  background-color: var(--muted30);

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 12px;
  }

  .subtitle {
    text-align: center;
    color: var(--muted-foreground);
  }

  .accordions {
    margin-top: 40px;
    width: 100%;
    max-width: 767px;

    display: flex;
    gap: 12px;
    flex-direction: column;

    > div {
      border: solid 1px var(--border-color);
      border-radius: 12px;
      background-color: var(--grey);
      transition: var(--transition);

      button,
      p {
        padding: 20px 24px;
      }

      button {
        border: none;
        background: transparent;

        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-weight: 600;
      }

      .content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s ease;

        p {
          overflow: hidden;
          padding: 0 24px;
          color: var(--muted-foreground);
          font-size: 0.875rem;
          line-height: 1.25rem;

          opacity: 0;
          transform: translateY(-4px);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }
      }

      &.open {
        box-shadow:
          0 0 #0000,
          0 0 #0000,
          0 0 #0000,
          0 0 #0000,
          0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);

        .content {
          grid-template-rows: 1fr;
        }

        .content > p {
          opacity: 1;
          transform: translateY(0);
          padding-bottom: 20px;
        }

        button svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
