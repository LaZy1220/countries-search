import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { clearControls } from "../store/controls/controls-actions";
import { ThemeSwithcer } from "../features/theme/ThemeSwitcher";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--color-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
export const Header = () => {
  const dispatch = useDispatch();
  const handleClear = () => dispatch(clearControls());
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={handleClear}>Where is the world?</Title>
          <ThemeSwithcer />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
