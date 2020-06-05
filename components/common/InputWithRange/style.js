import styled from 'react-emotion';

export const Wrap = styled.div`
  position: relative;
  width: ${props => props.width || '380px'};
  margin-bottom: ${props => props.mb || '30px'};
  height: 50px;
  border-radius: 5px;
  & > input {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid rgba(40,47,54,0.15);
    padding: 0 15px;
    font-size: 16px;
    outline: none
  }
`