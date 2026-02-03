import styled from "styled-components";

export const NrCompliance = styled("section")`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 48px 0;

  background-size: cover;
  background-image: url("/images/hero-consultation.webp");
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: "";
    background-image: linear-gradient(
      to right,
      hsl(0 0% 100%),
      hsl(0deg 0% 100% / 95%),
      hsl(0deg 0% 100% / 70%)
    );
  }

  .container {
    position: relative;
    z-index: 2;

    display: flex;
    gap: 80px;
    align-items: center;

    > div {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 40px 0;

    .container {
      gap: 65px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 35px 0;

    .container {
      gap: 50px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 30px 0;

    .container {
      gap: 35px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px 0;

    .container {
      flex-direction: column;
    }
  }
`;
