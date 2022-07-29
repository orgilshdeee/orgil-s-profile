import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";

export default function Age() {
  const [data, setData] = useState();
  useEffect(() => {
    profileServices
      .age()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div id="age" className="container">
      <img
        src="http://35.164.143.162:3001/gifs/clown-pepe.gif"
        alt="pic"
        id="profImg"
      />
      <h1 className="mt-5 ages">{data?.age}</h1>
    </div>
  );
}
