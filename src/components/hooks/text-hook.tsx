import { useEffect, useState } from "react";

function TextLoader({file, cname}: {file: string, cname: string}) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((data) => setText(data));
  }, [file]);

  return <p className={cname}>{text}</p>;
}

export default TextLoader;