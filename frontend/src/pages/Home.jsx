import Answer from "../components/Answer";
import Poster from "../components/Poster";

export default function Home() {
  return (
    <>
      <p>Timer</p>
      <p>Points</p>
      <h1>Posteries</h1>
      <Poster />
      <Answer name="Le Bon, La Brute, Le Truand" />
      <Answer name="Le Bon, La Brute, Le Truand" />
      <Answer name="Le Bon, La Brute, Le Truand" />
      <Answer name="Le Bon, La Brute, Le Truand" />
    </>
  );
}
