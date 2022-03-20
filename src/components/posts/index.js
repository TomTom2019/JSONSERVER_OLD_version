import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, cleargetPostById } from "../../store/actions";

import Moment from "react-moment";

const Post = (props) => {
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(props.match.params.id));
  }, [dispatch, props.match.params.id]);



  

useEffect(()=>{
  return () =>{
   dispatch(cleargetPostById())
   }
},[dispatch])



  return (
    <>
      {post.postById ? (
        <div>
          <h1>{post.postById.title}</h1>
          <div className="">

            <img src={post.postById.image} className='img-fluid rounded' alt='...' />
          </div>
          <div>
            Created by: <span>{post.postById.author} - </span>
            <Moment format="DD MMMM">{post.postById.createdAt}</Moment>
          </div>
          <div className="mt-3 content">
            <div
              dangerouslySetInnerHTML={{ __html: post.postById.content }}
            ></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Post;
