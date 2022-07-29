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
          src="http://35.164.143.162:3001/gifs/clown-pepe.gif"
          alt="pic"
          id="profImg"
        />
        <h1 id="header" className="mt-5 ms-2">
          {data?.header}
        </h1>
        <p id="body" className="mt-5 mb-5">
          {data?.body}
        </p>
        <div className="d-flex justify-content-around mt-4 me-5 exp">
          <div className="frontEnd mt-2">
            <h4 className="ms-2">Front End</h4>
            <ul>
              {data?.exp.front.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="backEnd mt-2">
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
