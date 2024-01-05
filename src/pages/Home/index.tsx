import { SubmitHandler, useForm } from "react-hook-form";
import dictionaryImg from "../../../public/dictionary.png";
import { useQuery } from "@tanstack/react-query";
import { getWordDefinition } from "../../api/words.api";
import { useRef, useState } from "react";

import { FcSpeaker } from "react-icons/fc";
import Form from "../../components/Form";
import Card from "../../components/Card";
import FlatList from "../../components/FlatList";

type Input = {
  search: string;
};
const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [word, setWord] = useState("hello");

  const query = useQuery({
    queryKey: ["randomWord"],
    queryFn: async () => {
      return await getWordDefinition(word);
    },
    retry: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  /**
   *
   * @param data
   */
  const onSubmit: SubmitHandler<Input> = (data) => {
    setWord(data.search);
    setTimeout(() => {
      query.refetch();
    }, 10);
  };

  if (query.status === "pending" || query.isLoading) return <div></div>;

  /**
   *  get phonetics object
   * @returns phonetics object
   */
  const phonetics = () => {
    const result = query?.data[0]?.phonetics?.filter((p: any) => {
      return p.text && p.audio;
    });

    return result.length > 0 ? result[0] : {};
  };

  /**
   * Play audio
   */
  const playAudio = () => {
    audioRef.current?.play();
  };

  return (
    <div className="flex flex-col items-center min-h-[90vh] gap-2">
      <div className="mt-8 flex flex-col items-center gap-2 w-full">
        <img src={dictionaryImg} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* FIX: React hook form not registering through compound component */}
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

      {query.status === "error" ? (
        <div>Word not found</div>
      ) : (
        <Card className="mx-8 mb-4">
          <Card.Header
            title={query?.data[0]?.word?.toUpperCase()}
            subheading={phonetics()[0]?.text}
          >
            {phonetics()?.audio && (
              <button onClick={playAudio} className="btn">
                <FcSpeaker size={30} />
              </button>
            )}
          </Card.Header>
          <audio
            className="hidden"
            ref={audioRef}
            src={phonetics()?.audio}
            controls
          />

          <div className="body">
            <FlatList
              data={query?.data[0]?.meanings}
              keyExtractor="partOfSpeech"
              RenderItem={(item: any) => {
                return (
                  <div key={item.partOfSpeech}>
                    <li className="divider-text text-secondary">
                      {item.partOfSpeech}
                    </li>
                    <div className="grid grid-cols-2 gap-2">
                      <FlatList
                        data={item.definitions}
                        keyExtractor="definition"
                        RenderItem={(item: any) => {
                          return (
                            <div key={item.definition}>
                              <div className="text-white pl-4">
                                {item.definition}
                              </div>
                              {item.example && (
                                <div className="text-gray pl-8">
                                  Example: {item.example}
                                </div>
                              )}
                            </div>
                          );
                        }}
                      />
                    </div>
                    <div className="divider"></div>
                  </div>
                );
              }}
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default Home;
