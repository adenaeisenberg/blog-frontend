/* eslint-disable react/prop-types */

import axios from "axios";
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt={post.title} />
          <p>Body: {post.body}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let posts = [];

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      posts = posts.data;
    });
  };

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>

      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

//     {
//   id: 1,
//   title: "My Awesome Vacation",
//   body: "Just got home from the best vacation ever",
//   image_url:
//     "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/05/10054553/12-Flexible-Companies-That-Help-Pay-for-Your-Vacation.jpg",
// },
// {
//   id: 2,
//   title: "I just got home from the beach",
//   body: "Such great weather today",
//   image_url: "https://images.nationalgeographic.org/image/upload/v1638889927/EducationHub/photos/pebble-beach.jpg",
// },
// {
//   id: 3,
//   title: "New job!!",
//   body: "I just got a new job!!!!",
//   image_url:
//     "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/software_engineer.jpeg.jpg",
// },
