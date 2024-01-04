import ButtonClass from "./ButtonClass";
import Title from "./Title";

function Parent() {
  return (
    <div style={{ background: "lavender" }}>
      <Title wording="Hello Robbi" />

      {/* PENULISAN PERTAMA */}
      <ButtonClass text="Count"></ButtonClass>

      {/* PENULISAN KEDUA */}
      <ButtonClass text="Hello" />
    </div>
  );
}

export default Parent;
