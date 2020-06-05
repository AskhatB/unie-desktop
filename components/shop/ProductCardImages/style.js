import styled from 'react-emotion'

export const Wrap = styled.div`
  & .slick-dots li {
    width: 47px;
    height: 47px;
    border-radius: 5px;
    border: 1px solid #dfe0e1;
  }
  & .slick-dots li.slick-active {
    border: 2px solid #4592ff;
  }
  & .slick-dots {
    bottom: -80px !important;
  }
`
export const Item = styled.div`
  width: 100%;
  & > img {
    width: 60%;
    margin: auto;
    object-fit: contain;
  }
`

export const PagingItem = styled.div`
  width: 47px;
  height: 47px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
