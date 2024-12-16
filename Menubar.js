import React from 'react';
import { Button } from 'react-bootstrap';
import './Menubar.css';

const Menubar = () => {
  return (
    <section className="menu container-fluid">
      <div className="front">
        <img
          src="https://thumbs.dreamstime.com/b/cocktails-smoke-close-up-selective-focus-344627413.jpg?w=1400"
          alt="Drink"
          className="drink-image"
        />
        <div className="menu-header">
          <h1>MENU</h1>
          <p>
            Please take a look at our menu featuring food, drinks, and brunch. If
            you'd like to place an order, use the "Order Online" button below.
          </p>
          <div className="menu-tabs mt-5">
            <Button variant="primary">FOOD</Button>
            <Button variant="secondary">DRINKS</Button>
            <Button variant="success">BRUNCH</Button>
          </div>
        </div>
      </div>
      <div className="brunch-cocktails">
        <h2>BRUNCH COCKTAILS</h2>
        <div className="menu-item" style={{position:"relative",top:'10px'}}>
          <h3>CINNAMON TOAST CRUNCH <span className="price">$16</span></h3>
          <p>Screwball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
        </div>
        <div className="menu-item">
          <h3>MOET SPRITZ <span className="price">$20</span></h3>
          <p>Aperol, St. Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
        </div>
        <div className="menu-item">
          <h3>BAR 42 MARY <span className="price">$14</span></h3>
          <p>Titos, tomato juice, Worcestershire, celery salt, black pepper, tabasco, fully loaded</p>
        </div>
      </div>
    </section>
  );
};

export default Menubar;


