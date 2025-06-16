import { useEffect, useState } from "react";

function TextLoader(file: string) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((data) => setText(data));
  }, [file]);

  return <p>{text}</p>;
}

export default TextLoader;