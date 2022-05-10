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
      <button className="rules-button" type="button" onClick={displayRules}>
        ?
      </button>
      <h1>PoSteries</h1>
      <ul className="category-list">
        <CategoryList />
      </ul>
      <Link to="/scores">Scoreboard</Link>
      <Modal>
        <RulesModal />
      </Modal>
    </div>
  );
}

export default Welcome;
