import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header>
      <h1 className="header">Task Tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
