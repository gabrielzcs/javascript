import Button from "./Button";

const Header = () => {
  return (
    <header>
      <h1 className="header">Task Tracker</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

export default Header;
