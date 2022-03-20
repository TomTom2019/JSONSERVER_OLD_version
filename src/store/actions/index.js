import * as api from "../../API";
import { GET_POSTS, GET_POST_BY_ID, CLEAR_POST_BY_ID,SEND_MESSAGE } from "../types";

export const getPosts = (homePosts, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(homePosts, page, order, limit),
});

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  payload: api.getPostById(id),
});

export const cleargetPostById = () => ({
  type: CLEAR_POST_BY_ID,
  payload: {},
});


//USER
export const sendMessage = (data) =>({
  type: SEND_MESSAGE,
  payload:api.sendMessage(data)
})
