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
    <div id="descip" className="container">
      <img src={data?.img} alt="pic" id="profImg" />
      <div id="header">{data?.header}</div>
      <div id="body">{data?.body}</div>
    </div>
  );
}
