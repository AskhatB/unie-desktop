import {
  Wrap,
  Heading,
  Item,
  FeatureBlock,
  FeatureName,
  FeatureValue,
  Dashes
} from './style'

const ProductFeatures = ({ data }) => {
  return (
    <Wrap>
      {data.specification.map(val => {
        return (
          <Item>
            <Heading>{val.group_name}</Heading>
            {val.group.map(v => {
              return (
                <FeatureBlock>
                  <FeatureName>
                    {v.s_name}{' '}
                    ................................................................................................
                  </FeatureName>
                  <FeatureValue>{v.s_value}</FeatureValue>
                </FeatureBlock>
              )
            })}
          </Item>
        )
      })}
    </Wrap>
  )
}

export default ProductFeatures
