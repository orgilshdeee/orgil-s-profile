import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";

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
        <img
          src="http://localhost:3000/gifs/clown-pepe.gif"
          alt="pic"
          id="profImg"
        />
        <h1 id="header" className="mt-5">
          {data?.header}
        </h1>
        <p id="body" className="mt-5 mb-5">
          {data?.body}
        </p>
        <div className="d-flex justify-content-between mt-4">
          <div className="frontEnd">
            <h4 className="ms-2">Front End</h4>
            <ul>
              {data?.exp.front.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="backEnd">
            <h4 className="ms-2">Front End</h4>
            <ul>
              {data?.exp.back.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
