import ButtonClass from "./ButtonClass";
import Title from "./Title";

function Parent() {
  const handleChildToParent = (paylod) => {
    console.log("INI", paylod);
  };
  return (
    <div style={{ background: "lavender" }}>
      <Title wording="Ready" name="Robby" sendDataNameToParent={handleChildToParent} />

      {/* PENULISAN PERTAMA */}
      <ButtonClass></ButtonClass>

      {/* PENULISAN KEDUA */}
      <ButtonClass text="count" />
    </div>
  );
}

export default Parent;
