// DONE
import React, { useEffect } from "react";
import classes from "./Home.module.css";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import { useDispatch, useSelector } from "react-redux";
import { articles } from "../../store/actions/articleActions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(articles());
  }, [dispatch]);

  return (
    <div className={classes.home}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <>
          {data.map((article) => (
            <Link key={article._id} to={`/articles/${article._id}`} className={classes.article}>
              <img className={classes.image} src={`http://localhost:5000/uploads/${article.image}`} alt="articleImage"></img>
              <div className={classes.title}>{article.title}</div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
