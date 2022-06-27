// Modules
import links from "../Data/links";
import { useState } from "react";

// Components
import Collections from "./Collections";
import Filter from "./Filter";

// Main Function
function CareerBag() {
  // State to store the selected options
  const [filters, setFilters] = useState({
    city: ["All"],
    company: ["All"],
  });

  return (
    <div>
      <Filter links={links} setFilters={setFilters} />
      <div>
        {links.map((l) => {
          const ln = l[0].toString();
          if (filters.city.includes("All") || filters.city.includes(ln)) {
            return <Collections filters={filters}>{l}</Collections>;
          }
        })}
      </div>
    </div>
  );
}

export default CareerBag;
