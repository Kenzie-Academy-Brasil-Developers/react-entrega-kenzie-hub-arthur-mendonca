import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  * {
    font-family: "Inter", sans-serif;
  }

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

  .exit__button {
    background-color: var(--grey2);
    color: white;
    padding: 1rem 1.8rem;
    border-radius: 10px;
    border: none;
  }

  .exit__button:hover {
    opacity: 0.6;
    transition: 0.2s;
  }
`;
