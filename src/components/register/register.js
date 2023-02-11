import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  * {
    font-family: "Inter", sans-serif;
  }

  background-color: #121214;
  min-height: 100vh;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export const StyledHeader = styled.header`
  color: var(--color-primary);
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 3rem;

  button {
    background-color: var(--grey2);
    color: white;
    padding: 1rem 1rem;
    border-radius: 10px;
    border: none;
  }
`;
