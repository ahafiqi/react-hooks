import React from "react";
import { useEffect, useState } from "react";
import "../../../App.css";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState(null);

  // bentuk 1 dirender setiap ada perubahan state manapun
  useEffect(() => {
    console.log("bentuk 1");
    console.log("component mounted");
    document.title = `anda telah klik ${counter} kali`;
    console.log({ posts });
  });

  // bentuk 2 / hanya pertama kli render
  useEffect(() => {
    console.log("bentuk 2");
    console.log("functional component did Mount");
    const getPosts = async () => {
      const fetchPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonPosts = await fetchPosts.json();
      setPosts(jsonPosts);
    };
    getPosts();
  }, []);

  // bentuk 3 > ke triger setiap ada perubahan dependecies
  useEffect(() => {
    console.log("bentuk 3");
    console.log("state yang berubah");
    console.log({ posts });
    console.log({ counter });
  }, [counter, posts]);

  //bentuk 4 kondisi , dependency bisa state / props
  useEffect(() => {
    console.log("bentuk 4");
    console.group("nilai counater : ", counter);
    if (counter < 5) {
      console.log("level 1");
    } else if (counter < 10) {
      console.log("level 2");
    } else {
      console.log("level 3");
    }
  }, [counter]);

  return (
    <div className="App">
      <h1>useEffect</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
    </div>
  );
};

export default UseEffect;
