import styled from "styled-components";
import lnks from "../Data/links";
import { useState } from "react";
import Collections from "../components/Collections";

function CareerBag() {
  const [links, setLinks] = useState(lnks);
  function runone() {
    for (let i = 0; i < links.length; i++) {
      let current = links[i];
      return <h2>{current[0]}</h2>;
      // for (let j = 0; j < current[1].length; j++) {
      //   console.log(current[1][j][0], current[1][j][1]);
      // }
      // console.log("\n");
    }
  }

  return (
    <div>
      {links.map((city) => {
        return <Collections>{city}</Collections>;
      })}
    </div>
  );
}

const CareerBagComponent = styled.div``;

export default CareerBag;
