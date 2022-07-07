import { useEffect } from "react";
import { profileServices } from "../../services/service";

export default function Age() {
  useEffect(() => {
    profileServices
      .age()
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <>Hello I'm Age</>;
}
