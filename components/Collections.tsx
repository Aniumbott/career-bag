import styled from "styled-components";
import Carad from "../components/Card";

function Collections(props: any) {
  const links = props.children;
  function runone() {
    console.log(links[0]);
  }
  return (
    <CollectionsComponent>
      <h2>{links[0]}</h2>
      <Cards>
        {links[1].map((link: any) => {
          return <Carad link={link} />;
        })}
      </Cards>
    </CollectionsComponent>
  );
}

const CollectionsComponent = styled.div`
  width: 80vw;
  margin: 3rem auto;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 1rem;
`;
export default Collections;
