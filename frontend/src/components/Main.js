import { profileServices } from "../services/service";

export default function Main() {
  profileServices
    .main()
    .then((res) => res.json())
    .then((res) => console.log(res));
  return <div id="main">Hello I'm Main Page</div>;
}
