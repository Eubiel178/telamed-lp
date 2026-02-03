import styled from "styled-components";

export const InfoBox = styled("div")`
  display: flex;
  flex-direction: column;

  .logo {
    width: fit-content;
    transition: var(--transition);

    &:hover {
      opacity: 0.65;
    }

    img {
      height: unset;
      width: 280px;
      aspect-ratio: 280/96;
    }
  }

  .tag {
    margin-top: 40px;

    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.25;

    background-color: var(--yellow15);

    border: solid 1px var(--yellow40);
    padding: 8px 16px;
    border-radius: 9999px;

    display: flex;
    gap: 8px;
    align-items: center;
    width: fit-content;

    svg {
      width: 19px;
      height: auto;

      stroke: var(--yellow);
    }

    span {
      color: var(--yellow);
    }
  }

  h2,
  .description {
    margin-top: 24px;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;

    span {
      background: var(--gradient-brand);

      -webkit-background-clip: text;
      background-clip: text;

      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }

  .description {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    line-height: 1.625;

    strong {
      color: var(--foreground);
      font-weight: bolder;
    }
  }

  ul {
    margin-top: 40px;

    display: flex;
    gap: 16px;
    flex-direction: column;

    li {
      display: flex;
      gap: 12px;
      align-items: center;

      .icon {
        width: 40px;
        height: 40px;
        border-radius: 9999px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      h3 {
        font-weight: 600;
      }

      p {
        color: var(--muted-foreground);
        font-size: 0.875rem;
        line-height: 1.25;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .logo {
      img {
        width: 270px;
      }
    }

    .tag {
      margin-top: 35px;
    }

    h2,
    .description {
      margin-top: 22px;
    }

    h2 {
      font-size: 2.8rem;
    }

    ul {
      margin-top: 35px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .logo {
      img {
        width: 260px;
      }
    }

    .tag {
      margin-top: 30px;
    }

    h2,
    .description {
      margin-top: 22px;
    }

    h2 {
      font-size: 2.7rem;
    }

    ul {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .logo {
      img {
        width: 250px;
      }
    }

    .tag {
      margin-top: 25px;
    }

    h2,
    .description {
      margin-top: 20px;
    }

    h2 {
      font-size: 2.6rem;
    }

    ul {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      img {
        width: 240px;
      }
    }

    .tag {
      margin-top: 20px;
    }

    h2,
    .description {
      margin-top: 20px;
    }

    h2 {
      font-size: 2.3rem;
    }

    .description {
      font-size: 0.9rem;
    }

    ul {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    .logo {
      img {
        width: 230px;
      }
    }

    h2 {
      font-size: 2.2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .logo {
      img {
        width: 200px;
      }
    }

    h2 {
      font-size: 2rem;
    }
  }
`;
