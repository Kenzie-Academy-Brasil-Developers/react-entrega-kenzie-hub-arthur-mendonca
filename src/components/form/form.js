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

      p {
        color: #fbea85;
      }

      label {
        font-size: 1.3rem;
      }
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
      font-size: 1.5rem;
      background-color: var(--color-primary-negative);
      color: white;
      margin-top: 1.5rem;
      width: 100%;
      height: 5rem;
      cursor: pointer;
    }

    button:hover {
      transition: 0.2s;
      background-color: var(--color-primary-focus);
    }

    .select__label {
      font-size: 1.3rem;
      display: flex;
      width: 100%;
    }
    select {
      width: 100%;
      border: none;
      border-radius: 5px;
      height: 3.5rem;
      padding: 7px;
      background-color: var(--grey3);
      color: white;
    }
  }

  @media (min-width: 1439px) {
    max-width: 25%;
  }

  @media (min-width: 899px) {
    width: 30%;
  }

  @media (min-width: 426px) {
    width: 50%;
  }
`;
