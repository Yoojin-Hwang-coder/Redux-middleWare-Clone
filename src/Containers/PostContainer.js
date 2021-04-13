import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost } from '../modules/posts';

function PostContainer(props) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[props.postId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(props.postId));
  }, [props.postId, dispatch]);

  if (loading && !data) return <div> 로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return null;
  return <Post post={data} />;
}

export default PostContainer;
