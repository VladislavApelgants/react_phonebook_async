import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormFormik = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid crimson;

  transition: background-color 500ms linear, border-color 500ms linear;
  :hover,
  :focus {
    background-color: aqua;
    border-color: transparent;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  color: crimson;
  font-weight: 700;
`;
