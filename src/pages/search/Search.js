import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { styled } from "styled-components";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";

const Title = styled.h3`
  /* font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 10%; */
`;

const SearchForm = styled.form`
  padding: 20px 0 0 230px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
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
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await movieSearch();
      setTerm(results);
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit(searchHandler)}>
        {/* <Title>찾으시는 영화가 있으신가요?</Title> */}
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="영화,드라마 검색"
        />
      </SearchForm>

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
