import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [getNews, setNews] = useState();
  const apiLink = "https://687014bd7ca4d06b34b5ee6d.mockapi.io/fonte-api/posts";
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(apiLink);
      setNews(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="blog pt-[100px] pb-[150px] bg-[#1C1C1C]">
        <div className="container blog-container">
          <img src="/images/svg/Group 41.svg" alt="" className="mb-[30px]" />
          <div className="blog-cards grid grid-cols-1 gap-[50px]">
            {getNews &&
              getNews.map((post) => (
                <div className="blog-card">
                  <img width={400} height={250} src={post.image} alt="" />
                  <div className="blog-right">
                    <h3 className="blog-name">{post.category}</h3>
                    <h3 className="blog-title">{post.title}</h3>
                    <h3 className="blog-name">
                      {post.author}, {post.date}
                    </h3>
                    <p className="blog-info">{post.text}</p>
                    <Link className="flex gap-[5px]" to={`/blog/${post.id}`}>
                      Подробнее
                      <img src="/images/svg/Vector (2).svg" alt="" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
