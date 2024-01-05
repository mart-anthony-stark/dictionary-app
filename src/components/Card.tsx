import { FC } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
const Card: FC<CardProps> & {
  Header: FC<HeaderProps>;
} = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`card card-side bg-base-100 shadow-xl my-2 ${props.className}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

type HeaderProps = {
  title: string;
  subheading?: string;
  children?: React.ReactNode;
};
const Header: FC<HeaderProps> = ({ title, subheading, children }) => {
  return (
    <div className="flex w-full min-w-[400px] justify-between items-center">
      <div></div>
      <div>
        <h2 className="card-title">{title}</h2>
        <p className="text-secondary">{subheading}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

Card.Header = Header;

export default Card;
