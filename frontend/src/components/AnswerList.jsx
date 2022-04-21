import Answer from "./Answer";

function AnswerList(props) {
  const answersArray = [
    {
      title: props.title1,
      res: true,
      id: 1,
    },
    {
      title: props.title2,
      res: false,
      id: 2,
    },
    {
      title: props.title3,
      res: false,
      id: 3,
    },
    {
      title: props.title4,
      res: false,
      id: 4,
    },
  ];

  return answersArray
    .sort(() => Math.random() - 0.5)
    .map((data) => <Answer title={data.title} res={data.res} key={data.id} />);
}

export default AnswerList;
