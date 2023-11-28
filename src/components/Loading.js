import { BeatLoader } from "react-spinners";
import { styled } from "styled-components";

const Con = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Con>
      <BeatLoader color="crimson" />
    </Con>
  );
};
