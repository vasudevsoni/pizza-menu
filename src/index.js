import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import focacciaImage from "./pizzas/focaccia.jpg";
import margheritaImage from "./pizzas/margherita.jpg";
import spinaciImage from "./pizzas/spinaci.jpg";
import funghiImage from "./pizzas/funghi.jpg";
import salaminoImage from "./pizzas/salamino.jpg";
import prosciuttoImage from "./pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focacciaImage,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margheritaImage,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaciImage,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghiImage,
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salaminoImage,
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciuttoImage,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>The Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const num = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Exclusive Menu</h2>

      {num > 0 ? (
        <>
          <p>
            Authentic Italine cuisine. 6 creative dishes to choose from. All
            from our stove oven. Organic & Delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're in the process of building our unique menu. Stay in touch!</p>
      )}
    </main>
  );
}

function Pizza(props) {
  // if (props.pizzaObj.soldOut) return  null;

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>{`We're Closed right now!! Timings: ${openHour} - ${closeHour}.`}</p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <button className="btn">Order Now</button>
      <p>
        {`We're Open!! Timings: ${props.openHour} - ${props.closeHour}. Come visit us or
    Order online.`}
      </p>
    </div>
  );
}

//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
