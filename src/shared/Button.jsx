import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 40px;
  width: fit-content;
  text-align: center;
  border-radius: 8px;
  background: #fff;
  color: #000;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Button({ text }) {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
}

export default Button;
