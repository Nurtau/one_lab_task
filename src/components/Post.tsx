import React from "react";
import styled from "styled-components";
import { PostObject } from "./intefaces";

export const Post: React.FC<PostObject> = ({ title, body, authorName }) => {
  return (
    <PostContainer>
      <div>
        <h3>{title}</h3>
        <h4>Author: {authorName}</h4>
      </div>
      <p>{body}</p>
      <Line />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  margin: 2rem 2rem 2rem 2rem;
  div {
    margin-bottom: 10px;
  }
  h3 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
  }
  h4 {
    font-weight: 400;
    text-align: end;
  }
  p {
    text-align: justify;
  }
`;

const Line = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  height: 0.5px;
  background-color: white;
`;
