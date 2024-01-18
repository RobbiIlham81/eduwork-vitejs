// import Parent from "./components/Parent"; TUGAS BASIC COMPONENT

import Button from "./components/Button/Index";
// import InputRadio from "./components/Button/InputRadio";

function App() {
  return (
    // <Parent />; TUGAS BASIC COMPONENT

    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="judul">Selamat Datang</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="img-fortopolio"></div>
        <div className="content">
          <h2>About Me</h2>
          <p className="penulis">
            Ditulis oleh <a href="#">Robbi Amanda Ilham</a> pada januari 2024
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias ipsum magnam repudiandae animi, in fugiat doloremque quod facilis, provident labore iure commodi culpa? Doloremque recusandae fugiat quaerat aspernatur
            cum similique quidem eaque consequatur consequuntur sequi. Maiores vero quo nihil ducimus nobis. Magnam magni quas placeat illo animi recusandae quos?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste, numquam sequi, accusantium autem beatae, tempore doloremque sed ea quisquam nemo unde. Distinctio perferendis doloribus dicta ab deleniti consequuntur
            architecto ad voluptates culpa dolor minima voluptatum, molestias sed pariatur laboriosam est, iusto provident fugit! Commodi eveniet quasi, a dolores ab magnam blanditiis aperiam voluptate error, itaque eaque, at excepturi
            alias! Autem officia cupiditate quas totam unde tempora, doloremque molestiae et deserunt voluptatibus sequi nesciunt suscipit laboriosam impedit incidunt eligendi, magni cumque. Reiciendis fugit provident, aut voluptas
            quibusdam, sunt accusantium cupiditate ea unde repellat labore quasi aspernatur, dolorem hic quis vitae.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sed error quasi, sunt enim assumenda. Excepturi dignissimos facilis sapiente ipsam repudiandae delectus, rerum numquam id animi! Nobis blanditiis ipsum sunt,
            nemo perspiciatis ea corporis ratione quae, ipsa rem, doloribus eligendi non earum veniam nam totam similique fuga doloremque maxime vero! Quis fugit fuga, sint animi porro blanditiis iusto vel tenetur veniam iure quasi sequi
            voluptatibus saepe at eveniet beatae! Similique officia impedit dolorum quisquam. Ut ratione debitis neque dignissimos laudantium.
          </p>
        </div>
        <div className="footer">
          <p className="copy">Copyright 2024. Robbi A Ilham</p>
        </div>
      </div>
      {/* Materi Styling Component */}
      {/* 
      <InputRadio /> */}

      <Button />
    </div>
  );
}

export default App;
