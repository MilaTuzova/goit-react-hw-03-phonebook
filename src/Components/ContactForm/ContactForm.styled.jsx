import styled from '@emotion/styled';

export const FormContact = styled.form`
  display: inline-flex;
  flex-direction: column;
  border: 2px solid black;
  width: 560px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 6px;
  `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 700;
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 250px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 15px 16px;
  margin-top: 15px;
  font-weight: 700;
  font-size: 18px;
`;

export const Btn = styled.button`
  display: inline-block;
  color: black;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 30px;
  outline: none;
  border-style: solid none;
  border-color: #fdbe33 #000 #d77206;
  border-radius: 6px;
  background: linear-gradient(#f3ae0f, #e38916) #e38916;
  margin: auto;
  cursor: pointer;
`;
