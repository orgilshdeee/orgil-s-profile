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
      <h1>{data?.age}</h1>
    </div>
  );
}
