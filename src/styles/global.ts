import { createGlobalStyle } from "styled-components";
import { ResetStyle } from "./reset";

export const GlobalStyles = createGlobalStyle`
  ${ResetStyle}

  *{box-sizing: border-box}

  html {
    &:root {
--font-default:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";

--primaryColor:hsl(156 74% 35%);
--secondaryColor:hsl(207 51% 50%);

--white10:#ffffff1a;
--white20:#fff3;
--white30:#ffffff4d;
--white90:#ffffffe6;

--grey: #fff;
      --grey70: #ffffffb3;
      --grey80: #fffc;

      --blue:hsl(207 51% 50%);
      --blue-dark: #0f3357;
      --blue-light: hsl(207 100% 93%);

      --yellow: #f8b90d;
      --yellow15: hsl(44deg 94% 51% / 15%);
      --yellow40: hsl(44deg 94% 51% / 40%);
      --yellow-light: hsl(44 100% 90%);

      --pink:hsl(345 87% 64%);
      --pink20: hsl(345deg 87% 64% / 20%);

      --purple:hsl(237 100% 70%);
      --purple10:hsl(237 100% 70% / 10%);
      
      --teal:hsl(170 85% 47%);
      --teal20: hsl(170deg 85% 47% / 20%);
      
      --green:hsl(156 74% 35%);
      --green-light: hsl(156 100% 93%);

      --gradient-brand: linear-gradient(
        135deg,
        hsl(156 74% 35%) 0%,
        hsl(170 85% 47%) 50%,
        hsl(207 51% 50%) 100%
      );

      --muted:hsl(210 20% 96%);
      --muted30:hsl(210deg 20% 96% / 30%);
      --muted50:hsl(210deg 20% 96% / 50%);
      --foreground: #262626;
      --muted-foreground: #666666;

      --transition: 0.25s ease-in-out;

      --border-color:hsl(210 20% 90%);
    }

button , a {
  cursor: pointer;
}

    &::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

&::-webkit-scrollbar-track {
  background: var(--muted30);
  border-radius: 999px;
}

&::-webkit-scrollbar-thumb {
  background: var(--gradient-brand);
  border-radius: 999px;
  border: 2px solid var(--muted30);
}

&::-webkit-scrollbar-thumb:hover {
  filter: brightness(1.05);
}
  }

  body {
    color: var(--foreground);
    font-family: var(--font-ubuntu);
    line-height: 1.5;
    box-sizing: border-box;


    font-family:var(--font-default) ;
  }
  
  h1 , h2 , h3 , h4 , h5 , h6 {
    font-family: var(--font-ubuntu);
  }

  button{
       font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    max-width: 1420px;

    align-self: center;
    margin: 0 auto;
    padding: 0 15px;
  }

  .underline {
    position: relative;
    text-decoration: none;
    transition: var(--transition);

    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: currentColor;

      transition: inherit;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }


  @media only screen and (max-width: 1024px) {
  .container {
      max-width: 767px;

  }
  }
`;
