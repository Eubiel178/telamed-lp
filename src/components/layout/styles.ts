import styled from "styled-components";

export const Layout = styled("div")`
  min-height: 100dvh;
  overflow: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    flex: 1;
  }
`;
