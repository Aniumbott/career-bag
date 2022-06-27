import styled from "styled-components";
import { MultiSelect } from "@mantine/core";
import { useEffect, useState } from "react";

function Filter(props: any) {
  const { links, setFilters } = props;

  // Function to get the data from the links file
  function getData(bool: boolean) {
    let ans = ["All"];
    if (bool) {
      for (let i = 0; i < links.length; i++) {
        for (let j = 0; j < links[i][1].length; j++) {
          if (!ans.includes(links[i][1][j][0])) {
            ans.push(links[i][1][j][0]);
          }
        }
      }
    } else {
      for (let i = 0; i < links.length; i++) {
        ans.push(links[i][0]);
      }
    }
    return ans;
  }

  //  State to store the selected options
  const cities = getData(false);
  const l = getData(true);
  const [cityval, setCityval] = useState(["All"]);
  const [linksval, setlinksval] = useState(["All"]);

  //  Upadatae the filters state when the city or company filters are changed
  useEffect(() => {
    let filterd = { city: [""], company: [""] };
    for (let i = 0; i < cityval.length; i++) {
      filterd.city.push(cityval[i]);
    }
    for (let i = 0; i < linksval.length; i++) {
      filterd.company.push(linksval[i]);
    }
    // console.log(filterd);
    setFilters(filterd);
  }, [cityval, linksval]);

  return (
    <FilterComponent>
      <MultiSelect
        className="filter"
        searchable
        value={cityval}
        onChange={setCityval}
        defaultValue={["All"]}
        data={cities}
        clearButtonLabel="Clear selection"
        clearable
        placeholder="Pick all cities you like"
      />
      <MultiSelect
        className="filter"
        searchable
        value={linksval}
        onChange={setlinksval}
        defaultValue={["All"]}
        data={l}
        clearButtonLabel="Clear selection"
        clearable
        placeholder="Pick all companies you like"
      />
    </FilterComponent>
  );
}

const FilterComponent = styled.div`
  /* height: 2rem; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 1rem auto;
  width: 90vw;
  .filter {
    min-width: 20rem;
    /* width: 30rem; */
    margin: 0 1rem;
  }
`;
export default Filter;
