import { FC, ReactNode } from "react";

type NavbarProps = {
  children?: ReactNode;
};
const Navbar: FC<NavbarProps> & {
  Title: FC<{ text: string }>;
} = ({ children }) => {
  return (
    <div className="navbar bg-secondary text-primary">
      {children}
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
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
    </div>
  );
};

const Title: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">{text}</a>
    </div>
  );
};

Navbar.Title = Title;
export default Navbar;
