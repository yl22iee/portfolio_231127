import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import { Layout } from "../home/Layout";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Title = styled.h3`
  font-size: 17px;
  font-weight: 500;
  padding: 0 5%;
  margin-bottom: 10px;
`;

const Form = styled.form`
  padding: 0 5%;
`;

const Input = styled.input`
  width: 16%;
  padding: 5px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.div``;

export const Search = () => {
  //api에 검색 요청에 맞게 url연결과 매개변수 작성할것
  //form 사용시 useForm 사용할것
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });
  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Title style={{ marginTop: "150px" }}>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색내용"
        />
      </Form>

      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Bg $bgUrl={data.backdrop_path} />
                <MovieTitle>{data.title}</MovieTitle>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </div>
  );
};
