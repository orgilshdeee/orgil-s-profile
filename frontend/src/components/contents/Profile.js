import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";

export default function Profile() {
  const [data, setData] = useState();
  useEffect(() => {
    profileServices
      .profile()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div id="profile" className="container">
      <img
        src="http://35.164.143.162:3001/gifs/clown-pepe.gif"
        alt="pic"
        id="profImg"
      />
      <h1 className="mt-5">{data?.profile}</h1>
    </div>
  );
}
