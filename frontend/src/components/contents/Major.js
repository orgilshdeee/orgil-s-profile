import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";

export default function Major() {
  const [data, setData] = useState();
  useEffect(() => {
    profileServices
      .major()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div id="major" className="container">
      <h1>{data?.major}</h1>
      <img
        src="http://35.164.143.162:3001/gifs/pepe-cry.gif"
        alt=""
        id="pepecry"
      />
    </div>
  );
}
