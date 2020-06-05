import styled from 'react-emotion'

export const ButtonWrap = styled.button`
  background: ${props =>
    props.color && !props.active
      ? props.color
      : props.active
      ? 'transparent'
      : '#fff'};
  width: ${props => props.width || '380px'};
  height: ${props => props.height || '50px'};
  margin-top: ${props => props.top || '0'};
  margin-bottom: ${props => props.bottom || '0'};
  margin-left: ${props => props.left || '0'};
  margin-right: ${props => props.right || '0'};
  border-radius: ${props => props.round || '5px'};
  color: ${props =>
    props.fontColor && !props.active
      ? props.fontColor
      : props.active
      ? props.color
      : '#fff'};
  position: ${props => props.position};
  bottom: ${props => props.pbottom};
  left: ${props => props.pleft};
  padding: ${props => props.padding || '0 25px'};
  text-align: center;
  line-height: ${props => props.height || '0'};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  ${props =>
    (props.border && `border: ${props.border}`) ||
    (props.active && `border: 2px solid ${props.color}`) ||
    `border: none`};
  margin: ${props => props.margin};
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.5;
  }
`
