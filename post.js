const myPosts = [
  {
    title: "My first Blog post",
    id: 1,
  },
  {
    title: "My seconde blog post",
    id: 2,
  },
];

myPosts.map((post) => console.log(post.title));
const addPost = (newPost) => {
  myPosts.push(newPost);
  myPosts.map((post) => console.log(post.title));
};

addPost({ title: "My third post", id: 3 });
