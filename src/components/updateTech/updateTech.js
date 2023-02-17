import styled from "styled-components";

export const UpdateModal = styled.div`
  ::backdrop {
    background-color: blue;
  }

  width: 90vw;
  max-width: 10vw;
  z-index: 10;

  border-radius: 10px;
  position: fixed;
  top: 30%;
  left: 40%;

  width: 90vw;
  max-width: 35rem;

  background: var(--grey1);
  color: #656e77;
  /* box-shadow: 10px 10px 5px rgba(101, 110, 119, 0.2); */
  border: 0;
  text-align: center;

  animation: 0.3s linear slidein;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }

  .upper__div {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey2);
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 10px 10px 0 0;
    color: white;
  }

  .select__div {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    label {
      align-self: flex-start;
      padding-bottom: 0.5rem;
    }
  }

  .techName__div {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    label {
      align-self: flex-start;
      padding-bottom: 0.5rem;
    }
  }
  .buttons__div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 2rem;

    .edit__button {
      background-color: var(--color-primary-focus);
    }

    .edit__button:hover {
      background-color: var(--color-primary-negative);
      transition: 0.3s;
    }
  }

  input,
  select {
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
  }

  label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @keyframes slidein {
    from {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transfrom: translate3d(0, 0, 0);
    }
  }
  @keyframes fade {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;
