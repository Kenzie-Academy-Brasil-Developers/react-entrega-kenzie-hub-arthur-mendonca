import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--grey2);
  padding: 3rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 80vw;

  @media (min-width: 426px) {
    max-width: 70vw;
  }

  @media (min-width: 769px) {
    max-width: 30vw;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-self: center;
    padding-bottom: 2rem;
  }

  .styled__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .input__div {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      gap: 1rem;

      input {
        border: none;
        border-radius: 5px;
        height: 2.7rem;
        width: inherit;
        padding: 0 5px;
        background-color: var(--grey3);
        color: white;
      }
    }
    button {
      font-family: "Inter", sans-serif;
      width: inherit;
      border: none;
      border-radius: 5px;
      height: 2.7rem;
      background-color: var(--color-primary-negative);
      color: white;
      margin-top: 1.5rem;
      width: 100%;
    }

    button:hover {
      transition: 0.2s;
      background-color: var(--color-primary-focus);
    }

    select {
      width: 100%;
    }
  }
`;
