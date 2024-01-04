import { SubmitHandler, useForm } from "react-hook-form";
import dictionaryImg from "../../../public/dictionary.png";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRandomWord } from "../../api/words.api";

type Input = {
  search: string;
};
const Home = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["randomWord"],
    queryFn: getRandomWord,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center min-h-[90vh] gap-2">
      <div className="mt-8 flex flex-col items-center gap-2 w-full">
        <img src={dictionaryImg} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-2 w-full justify-center items-center"
        >
          <input
            {...register("search", { required: true })}
            type="text"
            placeholder="Start typing any word or phrase"
            className="input input-bordered w-full max-w-md"
          />
          <button className="btn bg-secondary text-primary">Search</button>
        </form>
        <div>
          {" "}
          {errors.search && (
            <span className="text-error">This field is required</span>
          )}
        </div>
      </div>

      <div>{JSON.stringify(query.data)}</div>
    </div>
  );
};

export default Home;
