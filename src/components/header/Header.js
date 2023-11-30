import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { styled } from "styled-components";

const ConHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: crimson;
  i {
    margin-right: 10px;
    color: crimson;
  }
`;

const Menu = styled.ul`
  width: 13%;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 10%;
  }
`;

export const Header = () => {
  return (
    <ConHeader>
      <Logo>
        <i class="fa-brands fa-yahoo"></i>
        <Link to={routes.home}>NETFELX</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.search}>검색</Link>
        </li>
        <li>
          <Link to={routes.login}>로그인</Link>
        </li>
        <li>
          <Link to={routes.signup}>회원가입</Link>
        </li>
      </Menu>
    </ConHeader>
  );
};
