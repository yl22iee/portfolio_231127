import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
`;

const Title = styled.div`
  font-size: 42px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 5px;
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
`;

const ErrorMessage = styled.div``;

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
          {...register("username", {
            required: "사용자이름은 필수 입니다.",
          })}
          type="text"
          placeholder="이름을 입력해주세요"
        />
        <ErrorMessage text={errors?.username?.message} />

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="이메일주소를 입력해주세요"
        />
        <ErrorMessage text={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "비밀번호는 필수입니다.",
          })}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <ErrorMessage text={errors?.password?.message} />

        <Input
          {...register("password", {
            required: "비밀번호는 필수입니다.",
          })}
          type="password"
          placeholder="비밀번호를 재입력해주세요."
        />
        <ErrorMessage text={errors?.password?.message} />

        <Button $isActive={isValid}>확인</Button>
      </LoginForm>
    </>
  );
};
