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
      <h1>{data?.name}</h1>
    </div>
  );
}
