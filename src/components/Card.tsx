import { FC } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type HeaderProps = {
  title: string;
  subheading?: string;
  children?: React.ReactNode;
};

type BodyProps = {
  children?: React.ReactNode;
};

const Card: FC<CardProps> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
} = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`card card-side bg-[#1D232A] shadow-xl my-2 ${props.className}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

const Header: FC<HeaderProps> = ({ title, subheading, children }) => {
  return (
    <div className="flex w-full min-w-[400px] justify-between items-center">
      <div></div>
      <div>
        <h2 className="card-title text-white">"{title}"</h2>
        <p className="text-secondary">{subheading}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

const Body: FC<BodyProps> = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;

export default Card;
