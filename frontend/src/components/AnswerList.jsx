import Answer from "./Answer";

function AnswerList(props) {
  return props.answersArray.map((data) => (
    <Answer
      title={data.title}
      res={data.res}
      key={data.id}
      isAnswerActive={props.isAnswerActive}
      setIsAnswerActive={props.setIsAnswerActive}
      activateAnswer={props.activateAnswer}
      isDisable={props.isDisable}
    />
  ));
}

export default AnswerList;
