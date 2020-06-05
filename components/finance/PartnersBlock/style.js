import styled from 'react-emotion'

export const Title = styled.h2`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 20px;
  color: #282F36;
  margin-bottom: 15px
`
export const Item = styled.div`
  width: 19%;
  height: 100px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #eeeeef;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  & > img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  };
  &:hover {
    box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
  }
`
export const Main = styled.div`
  width: 1150px;
  margin: 50px auto 0
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Text = styled.div`
  font-family: Open Sans;
  color: #53585E;
  font-size: 16px;
`