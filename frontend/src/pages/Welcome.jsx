import { Link } from "react-router-dom";
import { useModal } from "react-hooks-use-modal";
import CategoryList from "../components/CategoryList";
import RulesModal from "../components/RulesModal";

function Welcome() {
  const [Modal, open] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });

  const displayRules = () => {
    open();
  };

  return (
    <div className="welcome">
      <h1>PoSteries</h1>
      <div className="category-list">
        <h3>Choose your movie genre :</h3>
        <ul>
          <CategoryList />
        </ul>
      </div>
      <Link className="category scoreboard" to="/scores">
        Scoreboard
      </Link>
      <button className="rules-button" type="button" onClick={displayRules}>
        ?
      </button>
      <Modal>
        <RulesModal />
      </Modal>
    </div>
  );
}

export default Welcome;
