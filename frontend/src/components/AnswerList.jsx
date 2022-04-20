import Answer from "./Answer";

function AnswerList() {
  const answersArray = [
    {
      title: "Batman Begins",
      res: true,
      id: 1,
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

  return answersArray
    .sort(() => Math.random() - 0.5)
    .map((data) => <Answer title={data.title} res={data.res} key={data.id} />);
}

export default AnswerList;
