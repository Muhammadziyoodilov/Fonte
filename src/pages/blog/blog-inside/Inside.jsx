import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export const Inside = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [restPosts, setRest] = useState();
  useEffect(() => {
    axios
      .get("https://687014bd7ca4d06b34b5ee6d.mockapi.io/fonte-api/posts")
      .then((res) => {
        const restPosts = res.data.filter((item) => item.id != id);
        setRest(restPosts);
      });
    axios
      .get("https://687014bd7ca4d06b34b5ee6d.mockapi.io/fonte-api/posts")
      .then((res) => {
        const foundPost = res.data.find((item) => item.id == id);
        setPost(foundPost);
      });
  }, [id]);
  if (!post) {
    return (
      <div className="blog-inside bg-[#1C1C1C] py-[100px] text-white text-center">
        Загрузка...
      </div>
    );
  }
  return (
    <>
      <div className="blog-inside bg-[#1C1C1C] py-[100px] ">
        <div className="container inside">
          <h5 className="inside-link mb-[30px]">
            <Link to={"/blog"}>Блог / </Link>
            {post.author}
          </h5>
          <h1 className="inside-title mb-[15px]">{post.title}</h1>
          <h3 className="inside-date mb-[15px]">
            {post.author}, {post.date}
          </h3>
          <img src={post.image} alt="" className="inside-image mb-[15px]" />
          <p className="inside-info mb-[40px]">{post.text}</p>
          <p className="inside-info mb-[75px]">{post.text}</p>
          <h2 className="inside-bottom-title mb-[40px]">Интересное по теме</h2>
          <div className="inside-bottom flex justify-between">
            {restPosts.map((item) => (
              <>
                <div className="inside-bottom-card">
                  <h3 className="inside-bottom-name mb-[15px]">{item.title}</h3>
                  <Link
                    className="inside-bottom-link flex gap-[5px]"
                    to={`/blog/${item.id}`}
                  >
                    Подробнее
                    <img src="/images/svg/Vector (2).svg" alt="" />
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
