import styled from "styled-components";
import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";
import { useRegion } from "./use-region";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
  { value: "Polar", label: "Polar" },
];
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [region, handleChange] = useRegion();
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        playceholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={options[region]}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
