import Answer from "../components/Answer";
import Poster from "../components/Poster";
import Answer from "../components/Answer";

export default function Home() {
  return (
    <>
      <p>Timer</p>
      <p>Points</p>
      <h1>Posteries</h1>
      <Poster />
      <Answer name="Le Bon, La Brute, Le Truand" />
      <Answer name="Mary à tout prix" />
      <Answer name="Les dix commandements" />
      <Answer name="Ponyo sur la falaise" />
      <p>Setting</p>
      <p>Hint</p>
    </>
  );
}
