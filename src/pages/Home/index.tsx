const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search Term"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default Home;
