import logo from "../assets/simulacr-logo.png";

const Header = () => {
  return (
    <header className="w-full h-32 bg-[#292643] flex justify-start items-center">
      <img className="w-[170px] ml-24" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
