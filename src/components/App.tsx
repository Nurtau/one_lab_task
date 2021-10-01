import React, { useState } from "react";
import styled from "styled-components";
import { PostList } from "./PostList";
import { PostObject } from "./intefaces";
import { GlobalStyles, Label, LoadingLabel } from "../styles";

export const App = () => {
  const [posts, setPosts] = useState<PostObject[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  let innerElement: JSX.Element;

  if (errorMessage !== "") {
    innerElement = <Label>{errorMessage}</Label>;
  } else {
    if (posts.length === 0) {
      innerElement = (
        <>
          <LoadingLabel>Loading...</LoadingLabel>
          <PostList
            posts={posts}
            setPosts={setPosts}
            setErrorMessage={setErrorMessage}
          />
        </>
      );
    } else {
      innerElement = (
        <PostList
          posts={posts}
          setPosts={setPosts}
          setErrorMessage={setErrorMessage}
        />
      );
    }
  }

  return (
    <AppContainer>
      <GlobalStyles />
      {innerElement}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  margin: auto;
  width: 65%;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
