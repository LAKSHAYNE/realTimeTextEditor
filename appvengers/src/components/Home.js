import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../reducers/editorReducer";

function Home() {
  //var content = useSelector((state) => state.editor.content);
  const dispatch = useDispatch();
  const [content, setContent] = useState(
    useSelector((state) => state.editor.content)
  );
  const [last, setLast] = useState("");
  const fetchx = async () => {
    console.log("fetchx called");
    fetch("http://localhost:8000/data").then((serverPromise) =>
      serverPromise
        .json()
        .then((data) => {
          //console.log(data[0].content);
          setContent(data[0].content);
          setLast(data[0].content);
        })
        .catch((e) => console.log(e))
    );
  };
  async function getAlerts() {
    if (last !== content) {
      console.log("Updating......", content, ">>>>>", last);
      const response = await fetch("http://localhost:8000/data", {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content }),
      });
      setLast(content);
    }
  }
  useEffect(() => {
    if (content === "") {
      fetchx();
    }
  }, []);

  return (
    <textarea
      style={{ width: "100%", height: "100%" }}
      value={content}
      onChange={(e) => {
        getAlerts();
        setContent(e.target.value);
        //dispatch(update(e.target.value));
      }}
    />
  );
}

export default Home;
