import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { routes } from "../../routes";
import { ErrorMessage } from "./ErrorMessage";

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
    margin-top: 80px;
    margin-bottom: 50px;
    max-width: 350px;
    height: 500px;
  }

  margin-top: 80px;
  margin-bottom: 50px;
  max-width: 350px;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 43px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 460px) {
    font-size: 32px;
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
  margin-top: 5%;

  @media screen and (max-width: 460px) {
    padding: 0.8rem 0.5rem;
    font-size: 13px;
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

  @media screen and (max-width: 460px) {
    padding: 0.6rem 0.5rem;
    font-size: 13px;
  }
`;

const BottomInfo = styled.div`
  font-size: 20px;
  font-size: 700;
  margin-top: 30px;

  p {
    display: inline;
    color: lightgray;
  }

  @media screen and (max-width: 460px) {
    padding: 0.2rem 0.5rem;
    font-size: 13px;
  }
`;

const Searchpasswd = styled.div`
  color: lightgray;
  font-size: 12px;
  margin-top: 50px;
  text-decoration: none;
  p {
    color: lightgray;
  }
`;

export const Login = () => {
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
        <Title>로그인</Title>

        <Input
          {...register("username", {
            required: "email은 필수 입니다.",
          })}
          type="email"
          placeholder="이메일주소를 입력해주세요"
        />
        <ErrorMessage text={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />

        <Button $isActive={isValid}>로그인</Button>

        <BottomInfo>
          아이디가 없으신가요?{" "}
          <Link to={routes.signup}>
            <p>회원가입</p>
          </Link>
        </BottomInfo>

        <Searchpasswd>
          <Link to={routes.searchID}>
            <p>아이디를 잊어버리셨나요?</p>
          </Link>
        </Searchpasswd>
      </LoginForm>
    </>
  );
};
