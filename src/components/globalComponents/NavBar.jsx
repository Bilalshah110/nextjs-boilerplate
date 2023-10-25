import ThemeBtn from "./ThemeBtn";

export const NavBar = () => {
  return (
    <nav className="bg-l-g-b dark:bg-d-g-b fixed z-10 w-full backdrop-blur-md shadow-sm py-6 select-none">
      <div className={`container flex justify-between items-center`}>
        <p>NavBar</p>
        <ThemeBtn />
      </div>
    </nav>
  );
};
