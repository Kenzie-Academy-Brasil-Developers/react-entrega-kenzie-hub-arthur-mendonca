import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4b0;
  color: #656e77;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  .section__modal {
    display: flex;
    flex-direction: column;
    width: 35rem;
    animation: 0.3s linear slidein;
    background: var(--grey1);
    height: fit-content;
    border-radius: 0 0px 10px 10px;

    .icon {
      width: 2rem;
      height: 2rem;
    }

    .dialog__box::backdrop {
      background: red;
      animation: 0.4s ease fade;
    }

    .first__div {
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

    .second__div {
      padding-top: 2rem;
      padding-bottom: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;

      span {
        margin-top: 0.8rem;
        color: var(--color-warning);
      }
    }

    .third__div {
      padding-top: 2rem;
      padding-bottom: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;

      span {
        margin-top: 0.8rem;
        color: var(--color-warning);
      }
    }

    label {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .second__div,
    .third__div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      input,
      select {
        width: 100%;
        padding: 1.5rem;
        border-radius: 10px;
      }
    }

    button {
      background-color: var(--color-primary);
      margin-top: 2rem;
      margin-bottom: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 2rem;
    }

    button:hover {
      background-color: var(--color-primary-negative);
      transition: 0.3s;
    }

    @keyframes slidein {
      from {
        transform: translate3d(0, 15px, 0);
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
