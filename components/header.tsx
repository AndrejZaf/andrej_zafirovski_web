import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b">
      <div className="text-3xl font-semibold border-r px-4">AZ</div>
      <div className="items-center flex px-2 gap-x-2 border-l">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
