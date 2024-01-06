import searchGIF from "/search.gif";

type SearchingProps = {
  children?: React.ReactNode;
};
const Searching: React.FC<SearchingProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img src={searchGIF} alt="Searching..." height="800px" />
      {children}
    </div>
  );
};

export default Searching;
