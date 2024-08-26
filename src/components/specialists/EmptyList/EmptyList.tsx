import { EmptyListContainer, Image, Description } from './EmptyList.styles.ts';
import noData from '/empty_search_icon.svg';

const EmptyList = () => {
  return <EmptyListContainer>
    <Image src={noData}/>
    <Description>К сожалению, нет анкет с такими параметрами </Description>
  </EmptyListContainer>;
};
export default EmptyList;
