import { useEffect } from "react";
import { profileServices } from "../../services/service";

export default function Major() {
  useEffect(() => {
    profileServices
      .major()
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <>Hello I'm Major</>;
}
