import Answer from "./Answer";

function AnswerList() {
  const answerArray = [
    {
      title: "Batman Begins",
      res: true,
      id: 1,
      // add res and an id to provide keys to the array
    },
    {
      title: "Mary à tout prix",
      res: false,
      id: 2,
    },
    {
      title: "Les Dix Commandements",
      res: false,
      id: 3,
    },
    {
      title: "Ponyo Sur La Falaise",
      res: false,
      id: 4,
    },
  ];

  return answerArray
    .sort(() => Math.random() - 0.5)
    .map((data) => <Answer title={data.title} />);
}

export default AnswerList;
