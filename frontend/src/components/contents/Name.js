import { useEffect } from "react";
import { profileServices } from "../../services/service";

export default function Name() {
  useEffect(() => {
    profileServices
      .name()
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <>Hello I'm Name</>;
}
