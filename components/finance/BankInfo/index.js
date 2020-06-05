import { Wrap, Name, Img, Description } from './style'

const BankInfo = props => {
  return (
    <Wrap>
      <Name>{props.data.name}</Name>
      <Img>
        <img src={props.data.logo} />
      </Img>
      <Description>{props.data.description}</Description>
    </Wrap>
  )
}

export default BankInfo
