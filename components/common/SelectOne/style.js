import styled from 'react-emotion'

export const Wrap = styled.div`
  width: ${props => props.width || '380px'};
  height: ${props => props.height || '50px'};
  position: relative;
  border: ${props => props.border || '1px solid #dfe0e1'};
  ${props =>
    (props.active && 'border-radius: 5px 5px 0 0') || 'border-radius: 5px'};
  cursor: pointer;
  margin-bottom: ${props => props.mb};
  margin-right: ${props => props.mr}
`
export const Select = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #52585c;
`
export const SelectItem = styled.div`
  padding: 7px 15px;
  user-select: none;
  position: relative;
  border-top: 1px solid #eeeeef;
  &:hover {
    background: ${props => props.bg || '#e2f2fe'};
  }
`
export const SelectItems = styled.div`
  position: absolute;
  display: ${props => (props.active && 'block') || 'none'};
  background: #fff;
  width: 100%;
  top: 100%;
  max-height: 300px;
  left: -1px;
  border: 1px solid #dfe0e1;
  border-radius: 0 0 5px 5px;
  overflow: scroll;
  z-index: 1000;
`
export const Heading = styled.div`
  position: absolute;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  user-select: none;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  font-size: 16px;
`

export const Text = styled.div`
  color: #BEC0C3;
  font-size: 12px;
  font-family: Open Sans;
  height: 50%;
  display: flex;
  align-items: center
`
export const Arrow = styled.div`
  position: absolute;
  right: 10px;
  top: calc(50% - 10px);
  font-size: 14px;
  color: #77BEFF
`