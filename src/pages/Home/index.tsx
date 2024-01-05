import { SubmitHandler, useForm } from "react-hook-form";
import dictionaryImg from "../../../public/dictionary.png";
import { useQuery } from "@tanstack/react-query";
import { getRandomWord } from "../../api/words.api";
import { useRef } from "react";

import { FcSpeaker } from "react-icons/fc";
import Form from "../../components/Form";

type Input = {
  search: string;
};
const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const query = useQuery({
    queryKey: ["randomWord"],
    queryFn: getRandomWord,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  if (query.status === "pending" || query.isLoading)
    return <div>Loading...</div>;

  const phonetics = query?.data[0]?.phonetics?.filter((p: any) => {
    return p.text && p.audio;
  });

  const playAudio = () => {
    audioRef.current?.play();
  };

  return (
    <div className="flex flex-col items-center min-h-[90vh] gap-2">
      <div className="mt-8 flex flex-col items-center gap-2 w-full">
        <img src={dictionaryImg} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* FIX: React hook form not registering through compound component */}
          {/* <Form.TextInput
            {...register("search", { required: true })}
            placeholder="Start typing any word or phrase"
          /> */}
          <input
            {...register("search", { required: true })}
            type="text"
            placeholder="Start typing any word or phrase"
            className="input input-bordered w-full max-w-md"
          />
          <Form.Action>Search</Form.Action>
        </Form>
        <div>
          {errors.search && (
            <span className="text-error">This field is required</span>
          )}
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl mx-8">
        <div className="card-body">
          <div className="flex w-full min-w-[400px] justify-between items-center">
            <div></div>
            <div>
              <h2 className="card-title">
                {query?.data[0]?.word?.toUpperCase()}
              </h2>
              <p className="text-secondary">{phonetics[0]?.text}</p>
            </div>

            <button onClick={playAudio} className="btn">
              <FcSpeaker size={30} />
            </button>
          </div>
          <audio
            className="hidden"
            ref={audioRef}
            src={phonetics[0]?.audio}
            controls
          />

          {query?.data[0]?.meanings?.map((meaning: any) => {
            return (
              <div className="" key={meaning.partOfSpeech}>
                <li className="divider-text text-secondary">
                  {meaning.partOfSpeech}
                </li>
                <div className="grid grid-cols-2 gap-2">
                  {meaning.definitions.map((definition: any) => {
                    return (
                      <div key={definition.definition}>
                        <div className="text-white pl-4">
                          {definition.definition}
                        </div>
                        {definition.example && (
                          <div className="text-gray pl-8">
                            Example: {definition.example}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
