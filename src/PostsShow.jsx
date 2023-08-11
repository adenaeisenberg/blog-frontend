export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h1>More Info</h1>
      <h3>Title: {props.post.title}</h3>
      <p>Body: {props.post.body}</p>
    </div>
  );
}
