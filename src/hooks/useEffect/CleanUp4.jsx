import React, { useState, useEffect } from "react";
import Delay from "../../utils/Delay";

const FetchChild = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let isUnmount = false;
    console.log("intitial", isUnmount);

    const getPosts = async () => {
      await Delay(3000);
      const fetchPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonPosts = await fetchPosts.json();
      console.log("on Load", isUnmount);
      if (!isUnmount) {
        setPosts(jsonPosts);
        console.log(jsonPosts);
      }
    };

    getPosts();
    //ketriger ketika di hide
    return () => {
      isUnmount = true;
      console.log("on unmount", isUnmount);
    };
  }, []);

  return (
    <div>
      {!posts && <p>Loading...</p>}
      {posts && posts.map((post) => <h5 key={post.id}>{post.title}</h5>)}
    </div>
  );
};

const CleanUp4 = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <div>
      <h1>Fetch CleanUP</h1>
      <h2>Try to remove list components</h2>
      <button onClick={() => setShowChild(!showChild)}>show/hide</button>
      {showChild && <FetchChild />}
    </div>
  );
};

export default CleanUp4;
