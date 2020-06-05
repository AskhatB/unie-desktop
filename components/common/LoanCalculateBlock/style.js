import styled from 'react-emotion';

export const Wrap = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 30px 0;
  margin-bottom: 10px
`
export const Wrapper = styled.div`
  width: 1150px;
  margin: auto
`
export const Title = styled.h1`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 30px;
  color: #282F36;
  margin: 0 0 20px 0;
  padding: 0
`
export const InputsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px
`
export const Block = styled.div`
  margin-right: 16px
`
export const Text = styled.div`
  font-family: Open Sans;
  font-size: 16px;
  color: #282F36;
  margin-bottom: 10px;
  margin-right: ${props => props.mr};
`
export const RadioBtnWrapper = styled.div`
  display: flex;
  align-itetms: center;
`
export const Radio = styled.div`
  width: 180px
`