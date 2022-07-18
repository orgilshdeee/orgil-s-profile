import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";

export default function Name() {
  const [data, setData] = useState();
  useEffect(() => {
    profileServices
      .name()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div id="name" className="container">
      <img
        src="http://localhost:3000/gifs/clown-pepe.gif"
        alt="pic"
        id="profImg"
      />
      <h1 className="mt-5 ms-3">{data?.name}</h1>
    </div>
  );
}
