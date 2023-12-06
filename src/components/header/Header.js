import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { styled } from "styled-components";
import { useEffect, useRef } from "react";

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
  font-weight: 900;
  color: crimson;

  p {
    color: crimson;
  }

  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;

const Menu = styled.ul`
  width: 360px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 10%;
  }

  @media screen and (max-width: 450px) {
    font-size: 15px;
    width: 200px;
  }
`;

export const Header = () => {
  const headRef = useRef();
  console.log(headRef);

  const scrollHandler = () => {
    const pageY = window.scrollY;
    console.log(pageY);

    if (pageY > 300) {
      headRef.current.style.position = "fixed";
      headRef.current.style.backgroundColor = "raba(0,0,0,0.7)";
      headRef.current.style.backdropFilter = "blur(2px)";
    } else {
      headRef.current.style.position = "absolute";
      headRef.current.style.backgroundColor = "transparent";
      headRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <ConHeader ref={headRef}>
      <Logo>
        <Link to={routes.home}>
          <p>WONMOVIE</p>
        </Link>
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
