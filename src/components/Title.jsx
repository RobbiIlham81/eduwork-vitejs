/* eslint-disable react/prop-types */
// function Title(props) {
//   return <h1>{props.wording}</h1>;
// }

import { useState } from "react";

const Title = ({
  wording = "wording",
  // name = "Name",
  // sendDataNameToParent,
}) => {
  // const { wording = "wording" } = props;

  // STATE
  const [berhitung, setBerhitung] = useState(0);

  function handleCounterup() {
    // MANIPULASI STATE
    setBerhitung(berhitung + 2);
  }
  return (
    <button onClick={handleCounterup}>
      {wording} {berhitung}
    </button>
  );
};

export default Title;
