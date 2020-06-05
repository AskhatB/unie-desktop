import {
  Wrap,
  Collapse,
  Header,
  Name,
  Description,
  ProductAmount,
  CheckboxWrap
} from './style'
import BoldArrow from '../../icons/boldArrow'
import Checkbox from '../../common/Checkbox'

const FilterCollapse = props => {
  return (
    <Wrap>
      {props.data.filterCounts &&
        JSON.parse(props.data.filterCounts).map((val, indx) => {
          return (
            <Collapse key={indx}>
              <Header
                onClick={() => props.onClick(indx)}
                active={
                  JSON.parse(props.data.filterCounts).length === indx + 1 &&
                  props.isOpen !== indx
                }>
                <Name>{Object.keys(val)[0]}</Name>
                <BoldArrow rotate={(props.isOpen === indx && '0') || '180'} />
              </Header>
              <Description isOpen={props.isOpen === indx}>
                {val[Object.keys(val)[0]].map((v, i) => {
                  return (
                    <CheckboxWrap>
                      {v[Object.keys(v)[0]] === 0 ? null : (
                        <Checkbox
                          color="#4592FF"
                          key={i}
                          id={Object.keys(val)[0]}
                          active={
                            props.filterItems.filter(i =>
                              i.value.startsWith(Object.keys(v)[0])
                            ).length > 0 &&
                            props.filterItems.filter(i =>
                              i.name.startsWith(Object.keys(val)[0])
                            ).length > 0
                          }
                          onChange={e =>
                            props.onFillFilter(
                              e,
                              Object.keys(val)[0],
                              Object.keys(v)[0]
                            )
                          }>
                          {v[Object.keys(v)[0]] === 0
                            ? null
                            : Object.keys(val)[0].toLowerCase() === 'магазин'
                            ? props.partners.find(
                                x => x.id === Object.keys(v)[0]
                              ).name
                            : Object.keys(v)[0]}
                        </Checkbox>
                      )}
                      <ProductAmount>
                        {v[Object.keys(v)[0]] !== 0
                          ? v[Object.keys(v)[0]]
                          : null}
                      </ProductAmount>
                    </CheckboxWrap>
                  )
                })}
              </Description>
            </Collapse>
          )
        })}
    </Wrap>
  )
}

export default FilterCollapse
