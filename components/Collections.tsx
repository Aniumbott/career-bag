import styled from "styled-components";
import Carad from "../components/Card";
import { Divider } from "@mantine/core";

function Collections(props: any) {
  const links = props.children;
  const filters = props.filters;
  return (
    <CollectionsComponent>
      <h1>{links[0]}</h1>
      <Divider className="line" size={8} />
      <Cards>
        {links[1].map((link: any) => {
          if (
            filters.company.includes("All") ||
            filters.company.includes(link[0])
          ) {
            return <Carad link={link} />;
          }
        })}
      </Cards>
    </CollectionsComponent>
  );
}

const CollectionsComponent = styled.div`
  width: 90vw;
  margin: 3rem auto;
  .line {
    margin-bottom: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;
export default Collections;
