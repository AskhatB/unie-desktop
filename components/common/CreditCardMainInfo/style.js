import styled from 'react-emotion';

export const Wrap = styled.div`
  padding: 20px 0;
  background: #fff;
  margin-bottom: 10px;
`
export const Inner = styled.div`
  width: 1150px;
  margin: auto
`
export const CardsView = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardsInfo = styled.div``
export const Text = styled.div`
  font-family: Open Sans;
  font-size: ${props => props.fs};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  font-weight: ${props => props.fw};
`
export const CardsImg = styled.img`
  height: 185px;
`