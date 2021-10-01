import React, { useEffect } from "react";
import axios from "axios";
import { PostObject, UserObject, PostObjectWithoutUser } from "./intefaces";
import { Post } from "./Post";

interface PostListProps {
  posts: PostObject[];
  setPosts: (posts: PostObject[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  setPosts,
  setErrorMessage,
}) => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: postsData } = await axios.get<PostObjectWithoutUser[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const { data: usersData } = await axios.get<UserObject[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        const postsWithUser: PostObject[] = postsData.map((post) => {
          return {
            ...post,
            authorName: usersData[post.userId - 1].name,
          };
        });
        setPosts(postsWithUser);
      } catch (err: any) {
        if (err.message !== "Request aborted") {
          setErrorMessage(err.message);
        }
      }
    };
    fetchPosts();
  }, [posts, setPosts, setErrorMessage]);

  const postElements = posts.map(({ id, title, body, userId, authorName }) => (
    <Post
      key={id}
      id={id}
      userId={userId}
      title={title}
      body={body}
      authorName={authorName}
    />
  ));

  return <div>{postElements}</div>;
};
