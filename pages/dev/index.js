import styled from 'react-emotion'

const Wrap = styled.div`
  background: #eee;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H1 = styled.div`
  font-family: Roboto Slab;
  font-size: 56px;
  font-weight: bold;
  color: #32364c;
`

const P = styled.div`
  color: #32364c;
  font-size: 18px;
`

const Dev = () => {
  return (
    <Wrap>
      <H1>Ведутся технические работы</H1>
      <P>Приносим извинения за неудобства</P>
    </Wrap>
  )
}

export default Dev
