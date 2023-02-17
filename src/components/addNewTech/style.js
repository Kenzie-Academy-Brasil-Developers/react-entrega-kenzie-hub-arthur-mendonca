import styled from "styled-components";

export const Modal = styled.div`
  border-radius: 10px;
  position: fixed;
  top: 35%;
  left: 35%;

  width: 90vw;
  max-width: 35rem;

  background: var(--grey1);
  color: #656e77;
  /* box-shadow: 10px 10px 5px rgba(101, 110, 119, 0.2); */
  border: 0;
  text-align: center;

  animation: 0.3s linear slidein;

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
  }

  .third__div {
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    label {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
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
