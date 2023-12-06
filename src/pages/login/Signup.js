import { useForm } from "react-hook-form";
import { styled } from "styled-components";
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

  @media screen and (max-width: 670px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 50px;
    max-width: 300px;
    height: 450px;
    padding: 4rem 1rem;
  }
`;

const Title = styled.div`
  font-size: 42px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

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
  margin-top: 5%;

  @media screen and (max-width: 450px) {
    height: 40px;
    padding: 0.1rem 0.6rem;
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: crimson;
  color: white;
  border-radius: 10px;
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  opacity: ${(props) => (props.$isActive ? "pointer" : "default")};

  @media screen and (max-width: 450px) {
    margin-top: 15px;
    height: 40px;
    font-size: 17px;
  }
`;

export const Signup = () => {
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
        <Title>회원가입</Title>

        <Input
          {...register("name", {
            required: "이름은 필수 입니다.",
          })}
          type="text"
          placeholder="이름을 입력해주세요"
        />
        <ErrorMessage text={errors?.name?.message} />

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

        <Button $isActive={isValid}>확인</Button>
      </LoginForm>
    </>
  );
};
