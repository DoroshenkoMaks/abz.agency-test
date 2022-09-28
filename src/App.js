import "./App.css";

function App() {
  const setInputFileName = () => {
    let fileName = document.getElementById("fileName");
    let inputImage = document.querySelector("input[type=file]").files[0];
    fileName.innerText = inputImage.name;
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="logoBlock">
            <img src="./img/logo.svg" alt="Logo" />
            <span className="logoText">Testtask</span>
          </div>
          <div className="headerButtonBlock">
            <button>Users</button>
            <button>Sign Up</button>
          </div>
        </div>
      </header>
      <section className="firstSection">
        <div className="sectionText">
          <h1>Test assignment for front-end developer</h1>
          <p>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <button>Sign Up</button>
        </div>
      </section>
      <section className="usersSection">
        <h2>Working with GET request</h2>
        <div className="usersBlock">
          <div className="user">
            <img src="./img/test-photo.png" />
            <p data-title="My site" className="name">
              Name
            </p>
            <p>Position</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="user">
            <img src="./img/test-photo.png" />
            <p className="name">Name</p>
            <p>Position</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="user">
            <img src="./img/test-photo.png" />
            <p className="name">Name</p>
            <p>Position</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="user">
            <img src="./img/test-photo.png" />
            <p className="name">Name</p>
            <p>Position</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="user">
            <img src="./img/test-photo.png" />
            <p className="name">Name</p>
            <p>Position</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="user">
            <img src="./img/test-photo.png" />
            <p className="name">Name</p>
            <p>Position</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
        </div>
        <button>Show more</button>
      </section>
      <section className="formSection">
        <h2>Working with POST request</h2>
        <form>
          <input type="text" placeholder="Your name" id="inputName"></input>
          <input type="text" placeholder="Email" id="inputEmail"></input>
          <input type="text" placeholder="Phone" id="inputPhone"></input>
          <p className="inputHint">+38 (XXX) XXX - XX - XX</p>
          <div>
            <label className="positionLabel">Select your position</label>
            <label className="postionRadioButton">
              <input type="radio" name="position" value="frontend"></input>
              Frontend Developer
            </label>
            <label className="postionRadioButton">
              <input type="radio" name="position" value="backend"></input>
              Backend Developer
            </label>
            <label className="postionRadioButton">
              <input type="radio" name="position" value="designer"></input>
              Designer
            </label>
            <label className="postionRadioButton">
              <input type="radio" name="position" value="qa"></input>
              QA
            </label>
          </div>
          <div className="inputFileBlock">
            <label htmlFor="inputFile">Upload</label>
            <p id="fileName">Upload your photo</p>
            <input
              onChange={setInputFileName}
              type="file"
              id="inputFile"
              name="inputFile"
            />
          </div>
          <button type="submit" className="disabled">
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
