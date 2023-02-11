import styled from "styled-components";

export const StyledPageWrapper = styled.div`
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
`;

export const StyledSection = styled.section`
  background-color: var(--grey2);
  margin-top: 3rem;
  border-radius: 5px;
  width: 70%;
  justify-content: center;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    gap: 1rem;
    width: 100%;

    .formDiv {
      width: inherit;
      align-items: center;
      label {
        align-self: flex-start;
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

    .formDiv {
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      gap: 1rem;
    }

    .submit__div {
      width: inherit;
      display: flex;
      justify-content: center;

      button {
        font-family: "Inter", sans-serif;
        width: inherit;
        border: none;
        border-radius: 5px;
        height: 2.7rem;
        background-color: var(--color-primary);
        color: white;
        margin-top: 1.5rem;
      }
    }

    .register__div {
      width: 100%;

      span {
        align-self: flex-start;
      }
      .link__register {
        font-family: "Inter", sans-serif;

        border: none;
        border-radius: 5px;
        height: 2.7rem;
        background-color: var(--grey3);
        color: white;
        margin-top: 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 426px) {
    width: 40vw;
    /* background-color: blue; */
  }
`;
