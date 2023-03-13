import styled, {css} from "styled-components";

export const FormContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 50px;
  border: 10px solid #FFD700;
  width: 350px;
  }
`;
export const Button = styled.button`
  width: 50%;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  padding: 5px;
  background-color: #FFD700;
  ${({ btn }) => btn === "submit" && css`
    color: #2B3467;
    &:hover{
      color: #eee;
      background-color: #FF0000;
    }
  `}
`;