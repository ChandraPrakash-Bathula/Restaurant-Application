import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 - Logo
 - Navigation
 - Links/Buttons

 Body
 - Restaurant Card Container
  - Restaurant Cards
    - Image
    - Nameof Restaurant, Star Rating, Cuisines, Delivery time

Footer
- Contact
- Address
- Copyrights
- Links
*/

const hotelObj = {
  info: {
    id: "70940",
    name: "Sahadeva Reddy Tiffins",
    cloudinaryImageId: "o8iiausynabugrllkj2z",
    locality: "Maruthi nagar",
    areaName: "Dilsukhnagar",
    costForTwo: "₹150 for two",
    cuisines: [],
    avgRating: 4.5,
    parentId: "346540",
    avgRatingString: "4.5",
    totalRatingsString: "18K+",
    sla: {},
    availability: {},
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {},
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹59",
    },
    orderabilityCommunication: {},
    differentiatedUi: {},
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {},
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
};

const Header = () => {
  return (
    <section className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://fabrikbrands.com/wp-content/uploads/Batman-Logo-Evolution-1-1155x770.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </section>
  );
};

const styleCard = {
  backgroundColor: "powderblue",
};

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        src="https://www.pymnts.com/wp-content/uploads/2022/05/starbucks-earnings.jpg?w=768"
        alt="res-image"
        className="res-logo"
      />
      <h3>{props.resName}</h3>
      <p>{props.cuisine}</p>
    </div>
  );
};

const Body = () => {
  return (
    <section className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghana Foods" cuisine="Biryani" />
        <RestaurantCard resName="KFC" cuisine="Fried Chicken" />
        <RestaurantCard resName="Starbucks" cuisine="Coffee" />
      </div>
    </section>
  );
};

const AppLayout = () => {
  return (
    <main className="app">
      <Header />
      <Body />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
