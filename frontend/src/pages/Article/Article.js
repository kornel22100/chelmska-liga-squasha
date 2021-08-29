// DONE
import React, { useEffect } from "react";
import classes from "./Article.module.css";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import { article } from "../../store/actions/articleActions";
import { customizeDate } from "../../utils";
import { useDispatch, useSelector } from "react-redux";

const Article = (props) => {
  const dispatch = useDispatch();
  const articleId = props.match.params.id;
  const { loading, error, data } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(article(articleId));
  }, [dispatch, articleId]);

  return (
    <div className={classes.article}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <>
          <img className={classes.image} src={`http://localhost:5000/uploads/${data.image}`} alt="articleImage"></img>
          <div className={classes.title}>{data.title}</div>
          <div className={classes.date}>{customizeDate(new Date(data.date))}</div>
          <div className={classes.text} dangerouslySetInnerHTML={{ __html: data.text }}></div>
        </>
      )}
    </div>
  );
};

export default Article;
