import { FC, ReactNode } from "react";

type NavbarProps = {
  children?: ReactNode;
};
const Navbar: FC<NavbarProps> & {
  Title: FC<{ text: string }>;
  Toolbar: FC<{ onClick: () => void }>;
} = ({ children }) => {
  return <div className="navbar bg-secondary text-primary">{children}</div>;
};

const Title: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">{text}</a>
    </div>
  );
};

const Toolbar: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="flex-none">
      <button className="btn btn-square btn-ghost" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

Navbar.Title = Title;
Navbar.Toolbar = Toolbar;
export default Navbar;
