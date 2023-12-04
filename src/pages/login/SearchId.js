import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { routes } from "../../routes";

const LoginForm = styled.form`
  margin: 0 auto;
  margin-top: 5%;
  max-width: 450px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-bottom: 7%;

  @media screen and (max-width: 450px) {
    max-width: 340px;
    height: 500px;
    padding: 4rem 1rem;
    margin-top: 60px;
  }
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 43px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 8px;

  @media screen and (max-width: 450px) {
    padding: 0.2rem 0.5rem;
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: crimson;
  color: white;
  border-radius: 10px;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  opacity: ${(props) => (props.$isActive ? "pointer" : "default")};

  @media screen and (max-width: 450px) {
    height: 45px;
    font-size: 16px;
  }
`;

const BottomInfo = styled.div`
  font-size: 20px;
  font-size: 700;
  margin-top: 30px;

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

export const SearchId = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Title>비밀번호 재설정</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="이메일주소를 입력해주세요"
        />
        <Input
          {...register("password", {
            required: "비밀번호는 필수입니다.",
          })}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />

        <Button $isActive={isValid}>로그인</Button>

        <BottomInfo>
          아이디가 없으신가요? <Link to={routes.signup}>회원가입</Link>
        </BottomInfo>
      </LoginForm>
    </>
  );
};
