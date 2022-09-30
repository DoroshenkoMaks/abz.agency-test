import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [items, setItems] = useState([]);
  // const [position, setPosition] = useState([]);
  const items = [
    {
      id: 9123,
      name: "Alex",
      email: "alex@aegqweg.com",
      phone: "+380988761232",
      position: "Designer",
      position_id: 4,
      registration_timestamp: 1664469991,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/6335cbe762eab9123.jpg",
    },
    {
      id: 9122,
      name: "Alisha",
      email: "alisha@gmail.com",
      phone: "+380966121376",
      position: "Designer",
      position_id: 4,
      registration_timestamp: 1664469287,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/6335c9277326a9122.jpg",
    },
    {
      id: 9121,
      name: "Evi Markes",
      email: "evimarkes@gmail.com",
      phone: "+380978974563",
      position: "Designer",
      position_id: 4,
      registration_timestamp: 1664465874,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/6335bbd2105299121.jpg",
    },
    {
      id: 9120,
      name: "ivan ivanov",
      email: "ivanov212@gmail.com",
      phone: "+380997285212",
      position: "Lawyer",
      position_id: 1,
      registration_timestamp: 1664441890,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/63355e22923b39120.jpg",
    },
    {
      id: 9119,
      name: "vlada",
      email: "xisup@mailinator.com",
      phone: "+380435454665",
      position: "Content manager",
      position_id: 2,
      registration_timestamp: 1664438921,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/63355289427329119.jpg",
    },
    {
      id: 9118,
      name: "dsfgafdsg",
      email: "rgfdsgfre@fasgsdf.com",
      phone: "+380435576890",
      position: "Content manager",
      position_id: 2,
      registration_timestamp: 1664436689,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/633549d17f74b9118.jpeg",
    },
  ];
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
  //     )
  //     .then((res) => {
  //       setItems(res.data.users);
  //       console.log(res.data);
  //     });
  // }, []);
  // console.log(items);
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
          {items.map((item) => {
            return (
              <div className="user" key={item.id}>
                <img src={item.photo} alt="user image" />
                <p data-title={item.name}>
                  <span className="name">{item.name}</span>
                </p>
                <p data-title={item.position}>
                  <span>{item.position}</span>
                </p>
                <p data-title={item.email}>
                  <span>{item.email}</span>
                </p>
                <p data-title={item.phone}>
                  <span>{item.phone}</span>
                </p>
              </div>
            );
          })}
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
