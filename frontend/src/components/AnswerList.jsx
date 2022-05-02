import { memo } from "react";
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
  ].sort(() => Math.random() - 0.5);

  return answersArray.map((data) => (
    <Answer
      title={data.title}
      res={data.res}
      key={data.id}
      isAnswerActive={props.isAnswerActive}
      setIsAnswerActive={props.setIsAnswerActive}
    />
  ));
}

export default memo(AnswerList);
