import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = {
  blackColor: "#1d1d1d",
  pointColot: "#F97B22",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}


    *{
        box-sizing:border-box;
    }

    body{
        background-color: ${mainColor.blackColor};
        color: white;
        letter-spacing: -1px;
        word-break: break-all;
    }

    ul, li{
        list-style:none;
    }

    a{
        text-decoration:none;
        color: white;
    }
`;
