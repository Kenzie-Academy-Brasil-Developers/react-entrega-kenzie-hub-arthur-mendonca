import styled from "styled-components";

export const StyledDiv = styled.div`
  justify-content: space-around;
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: white;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 3rem;
  }
  button {
    border: none;
    padding: 1rem 1rem;
    border-radius: 5px;
    background-color: var(--grey2);

    .icon {
      color: white;
      font-weight: bold;
    }
  }
  button:hover {
    transition: 0.3s;
    background-color: var(--grey3);
  }

  .tech__list {
    color: white;
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 1fr 1fr; */
    list-style: none;
    align-items: center;
    gap: 4rem;
    background-color: var(--grey1);
    padding-top: 5rem;
    padding-bottom: 5rem;
    width: 90%;
    align-self: center;
    border-radius: 10px;
  }

  .li__tech-div {
    display: flex;
    flex-direction: row;
    width: 70vw;
    justify-content: space-between;
    /* width: 100%; */
    padding: 1rem;
    font-size: 1.5rem;
    background-color: var(--grey2);
    border-radius: 10px;
  }

  .li__tech-div:hover {
    filter: brightness(1.4);
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    .tech__list {
      width: 60%;
    }

    .li__tech-div {
      width: inherit;
    }
  }
`;
