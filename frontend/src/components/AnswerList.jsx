import Answer from "./Answer";

function AnswerList() {
  const array = [
    <Answer title="Batman Begins" res />,
    <Answer title="Mary à tout prix" res={false} />,
    <Answer title="Les dix commandements" res={false} />,
    <Answer title="Ponyo sur la falaise" res={false} />,
  ];
  // return myArray[Math.floor(Math.random() * myArray.length)];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default AnswerList;
