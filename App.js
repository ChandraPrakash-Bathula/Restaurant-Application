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

const resList = [
  {
    info: {
      id: "70940",
      name: "Sahadeva Reddy Tiffins",
      cloudinaryImageId: "o8iiausynabugrllkj2z",
      locality: "Maruthi nagar",
      areaName: "Dilsukhnagar",
      costForTwo: "₹150 for two",
      cuisines: ["Breakfast", "South Indian"],
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
      aggregatedDiscountInfoV3: {},
      orderabilityCommunication: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "931603",
      name: "Mehfil E Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/41f786c0-8861-4d89-a09e-a347e54580fd_931603.jpg",
      locality: "Uppal",
      areaName: "Uppal",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Arabian"],
      avgRating: 3.2,
      parentId: "283323",
      avgRatingString: "3.2",
      totalRatingsString: "109",
      sla: {
        deliveryTime: 68,
        lastMileTravel: 14.2,
        serviceability: "SERVICEABLE",
        slaString: "65-75 mins",
        lastMileTravelString: "14.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-af861816-b0ba-4749-83fd-fd7238a0feec",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mehfil-e-shawarma-uppal-rest931603",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "424800",
      name: "Veggie Chinese",
      cloudinaryImageId: "rk84wdctimix8zvfjtga",
      locality: "Kothapet",
      areaName: "Kothapet & Dilsukhnagar",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Beverages"],
      avgRating: 4.2,
      parentId: "6567",
      avgRatingString: "4.2",
      totalRatingsString: "6.3K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 9.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-20 11:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "93",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-af861816-b0ba-4749-83fd-fd7238a0feec",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/veggie-chinese-kothapet-kothapet-and-dilsukhnagar-rest424800",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "765012",
      name: "Dasara",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/33f1d4a5-456b-4720-945b-6b59b1e952d8_765012.jpg",
      locality: "Nagole Main Road",
      areaName: "Nagole",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "South Indian",
        "North Indian",
        "Beverages",
        "Chinese",
        "Indian",
        "Fast Food",
        "Kebabs",
        "Mughlai",
      ],
      avgRating: 3.9,
      parentId: "446638",
      avgRatingString: "3.9",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 10.4,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "10.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-af861816-b0ba-4749-83fd-fd7238a0feec",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/dasara-main-road-nagole-rest765012",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "760796",
      name: "Xero Degrees",
      cloudinaryImageId: "9a9f05296a19b26d3e5b8762d6bdbc4d",
      locality: "Srinivasa Colony",
      areaName: "Uppal",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 3.9,
      parentId: "21709",
      avgRatingString: "3.9",
      totalRatingsString: "51",
      sla: {
        deliveryTime: 79,
        lastMileTravel: 14.4,
        serviceability: "SERVICEABLE",
        slaString: "75-85 mins",
        lastMileTravelString: "14.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-af861816-b0ba-4749-83fd-fd7238a0feec",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/xero-degrees-srinivasa-colony-uppal-rest760796",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "939506",
      name: "Raju Gari Vantagadhi",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/10/6696edd5-6468-44e2-b67f-5e077ca8f757_939506.jpg",
      locality: "Kothapet & Dilsukhnagar",
      areaName: "Kothapet & Dilsukhnagar",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 3.7,
      parentId: "165955",
      avgRatingString: "3.7",
      totalRatingsString: "529",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 8.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-af861816-b0ba-4749-83fd-fd7238a0feec",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/raju-gari-vantagadhi-kothapet-and-dilsukhnagar-rest939506",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "571427",
      name: "Ghar Pakwan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/8510bf64-f37c-4e6d-9df6-54e21699f18e_571427.jpg",
      locality: "Azampura",
      areaName: "Malakpet",
      costForTwo: "₹300 for two",
      cuisines: ["Hyderabadi", "Indian"],
      avgRating: 4.2,
      parentId: "343051",
      avgRatingString: "4.2",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 56,
        lastMileTravel: 11.1,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "11.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-af861816-b0ba-4749-83fd-fd7238a0feec",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/ghar-pakwan-azampura-malakpet-rest571427",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

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
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRatingString } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        // src="https://www.pymnts.com/wp-content/uploads/2022/05/starbucks-earnings.jpg?w=768"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-image"
        className="res-logo"
      />
      <h3>{name}</h3>
      <p>{cuisines.slice(0, 2).join(",")}</p>
      <p>{avgRatingString}</p>
    </div>
  );
};

const Body = () => {
  const elements = [];
  return (
    <section className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} /> */}

        {/* {resList.filter(restaurant => restaurant.info.avgRating > 4).map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} /> //Here the JavaScript function returns a piece of JSX
        ))} */}

        {/* Not using keys is not accecptable >>>>>>>> Indexes as Keys >>>>>>>> Unique Keys */}
        
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} /> //Here the JavaScript map() function returns a piece of JSX
        ))}
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
