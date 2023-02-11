import styled from "styled-components";

export const StyledHeader = styled.header`
  color: white;

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 4rem;
  padding-top: 4rem;

  @media (max-width: 424px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
