import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
// import { Layout } from "../home/Layout";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding: 0 5%;
  margin-bottom: 10px;
`;

const SearchForm = styled.form`
  padding: 0 5%;
`;

const Input = styled.input`
  width: 20%;
  padding: 0.5rem 0.8rem;

  @media screen and (max-width: 460px) {
    padding: 0.5rem 0.5rem;
    width: 80%;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

const Layout = styled.div`
  padding: 150px 5%;

  @media screen and (max-width: 450px) {
    padding: 60px 5%;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;

  @media screen and (max-width: 450px) {
    height: 250px;
  }
`;

const MovieTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const Search = () => {
  const { register, handleSubmit } = useForm({
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

      <SearchForm onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색내용"
        />
      </SearchForm>

      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Link to={`/search/${data.id}`}>
                  <Bg $bgUrl={data.backdrop_path} />
                  <MovieTitle>{data.title}</MovieTitle>
                </Link>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </div>
  );
};
