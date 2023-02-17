import styled from "styled-components";

export const UpdateModal = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4b0;
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;

  .div__wrapper {
    max-width: 10vw;
    border-radius: 10px;
    width: 35rem;
    max-width: 35rem;
    background: var(--grey1);
    color: #656e77;
    border: 0;
    text-align: center;
    animation: 0.2s linear slidein;

    @media (max-width: 426px) {
      max-width: 29rem;
    }

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

      span {
        margin-top: 0.8rem;
        align-self: flex-start;
        color: var(--color-warning);
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
      width: 100%;

      button {
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 2rem;
        margin-right: 1rem;
        padding: 2rem;
      }

      .edit__button {
        background-color: var(--color-primary-focus);
        width: 65%;
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
        transform: translate3d(0, 5rem, 0);
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
  }
`;
