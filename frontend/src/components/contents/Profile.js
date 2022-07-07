import { useEffect } from "react";
import { profileServices } from "../../services/service";

export default function Profile() {
  useEffect(() => {
    profileServices
      .profile()
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <>Hello I'm Profile</>;
}
