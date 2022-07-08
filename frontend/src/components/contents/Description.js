import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";
import "../../styles/description.css";

export default function Description() {
  const [data, setData] = useState();
  useEffect(() => {
    profileServices
      .description()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div id="descip" className="container d-flex">
      <div>
        <img src={data?.img} alt="pic" id="profImg" />
        <h1 id="header" className="mt-5">
          {data?.header}
        </h1>
        <p id="body" className="mt-5">
          {data?.body}
        </p>
      </div>
    </div>
  );
}
