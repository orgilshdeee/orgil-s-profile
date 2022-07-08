import { useEffect, useState } from "react";
import { profileServices } from "../../services/service";
import "../../styles/major.css";

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
    </div>
  );
}
