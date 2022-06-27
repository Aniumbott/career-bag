import styled from "styled-components";
import lnks from "../Data/links";
import { useState } from "react";
import Collections from "./Collections";
import Filter from "./Filter";

function CareerBag() {
  const [links, setLinks] = useState(lnks);
  const [filters, setFilters] = useState({
    city: ["All"],
    company: ["All"],
  });

  return (
    <div>
      <Filter links={links} setFilters={setFilters} />
      <CollectionsContainer>
        {links.map((l) => {
          const ln = l[0].toString();
          if (filters.city.includes("All") || filters.city.includes(ln)) {
            return <Collections filters={filters}>{l}</Collections>;
          }
        })}
      </CollectionsContainer>
    </div>
  );
}

const CollectionsContainer = styled.div``;

export default CareerBag;
