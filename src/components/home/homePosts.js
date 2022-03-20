import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions";
import {LinkContainer} from 'react-router-bootstrap';
import { Spinner, Button,Card } from "react-bootstrap";


const HomePosts = () => {
  const homePosts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [loading,setloading] = useState(false);

  useEffect(() => {
    dispatch(getPosts({}, 1, "desc", 6));
  }, [dispatch]);

  const loadMorePost = () => {
    const page = homePosts.page + 1;
    setloading(true)
    dispatch(getPosts(homePosts, page, "desc",6)).then(()=>{
      setloading(false)
    })
  };

  return (
    <>
    <Card>
       <Card.Body>

   {homePosts.posts ?
      homePosts.posts.map((item)=>(
        <div key={item.id}>
              <img
                  style={{width:'100',height:'200px'}}
                  src={item.image}
              />
              <div>
                 <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              {item.excerpt}
              </Card.Text>

                 <LinkContainer
                    to={`/article/${item.id}`}
                   >
                   <Button variant="light">Read more</Button>
                 </LinkContainer>
              </div>
        </div>

      ))
     :null
   }

</Card.Body>
</Card>







     {loading ?
       <div style={{textAlign:"center"}}>
         <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
     </Spinner>
       </div>
     :null}


      {!homePosts.end & !loading ?
        <Button variant="outline-dark" onClick={() => loadMorePost()}>
          More posts
        </Button>
       : null}
    </>
  );
};

export default HomePosts;
