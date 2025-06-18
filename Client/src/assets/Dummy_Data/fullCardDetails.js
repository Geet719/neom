import mountain from "../img/mountain.jpg";
import yoga from "../img/yoga.jpg";
import surfing from "../img/surfing.jpg";
import holiday from "../img/holiday_0.png";
import disappoint from "../img/disappointed.svg";
import over from "../img/overwhelmed.svg";
import Children from "../img/child.png";
import chinese from "../img/chinese.png";
import socialize from "../img/cooking-dining.png";
import cooking from "../img/exploring.png";
import golfPng from "../img/golf.png";
import music from "../img/music.png";
import music1 from "../img/music.jpg";

import play from "../img/plays.png";
import room from "../img/rooms.png";

import golfImage from "../img/golf.jpg";
import surfingImage from "../img/surfing.jpg";
import islandImage from "../img/island.jpg";

import user1 from "../img/user1.png";
import user2 from "../img/user2.png";
import user3 from "../img/user3.png";
import user4 from "../img/user4.png";
import user5 from "../img/user5.png";
import cloud from "../img/Temprature.svg";

import joy from "../img/joy.svg";
import { dataDetailedCard } from "./data";

function truncateName(name, maxLength) {
  return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
}

const fullCardDetails = [
  {
    id: 1,
    imageMain: golfImage,
    imageCloud: cloud,
    nameImage: "Golf",
    name: truncateName("Round of Golf", 18),
    starReview: 5,
    noOfReview: 23,
    date: "Nov 10, 2022",
    title: "",
    location: "Sindalah City",
    reviewImage: over,
    reviewTitle: "Overwhelmed vibes are coming here",
    reviewSchedule: "Scheduled",
    favTitle: "Invigorating & Uplifting",
    favIcon: over,
    favName: "Round of Golf",
    // details till now dashboardcard

    lastEvent: [{ guestNumber: 3, eventRating: 5 }],

    detailedEvent: [
      {
        iconTitle: "Golf",
        iconPara:
          "This is one of the many events comes under the Golf category.",
        locationTitle: "Great location",
        locationPara:
          "Every guest has given a five star rating to this location.",
        upliftTitle: "Invigorating & uplifting experience",
        upliftPara:
          "This event has a rating of 5.0 that make this event overwhelmed.",
        mainDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",

        operatorTitle: "Operator River Stone",
        reviewCard: dataDetailedCard,
      },
    ],
  },
  {
    id: 2,
    imageMain: surfingImage,
    imageCloud: cloud,
    nameImage: "Surfing",
    name: truncateName("Surfing at leisure", 18),
    starReview: 5,
    noOfReview: 23,
    date: "Nov 12, 2022",
    title: "",
    location: "Sindalah City",
    reviewImage: over,
    reviewTitle: "Overwhelmed vibes are coming here",
    reviewSchedule: "Scheduled",
    favTitle: "Active & Energizing",
    favName: "Surfing",
    favIcon: joy,
    // details till now dashboardcard1
    
    lastEvent: [{ guestNumber: 3, eventRating: 5 }],

    detailedEvent: [
      {
        iconTitle: "Surfing",
        iconPara:
          "This is one of the many events comes under the Surfing category.",
        locationTitle: "Good location",
        locationPara:
          "Every guest has given a five star rating to this location.",
        upliftTitle: "Invigorating & uplifting experience",
        upliftPara:
          "This event has a rating of 5.0 that make this event overwhelmed.",
        mainDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",

        operatorTitle: "Operator River Stone",
        reviewCard: dataDetailedCard,
      },
    ],
  },
  {
    id: 3,
    imageMain: islandImage,
    imageCloud: cloud,
    nameImage: "Island",
    name: truncateName("Dive into Exciting Island Holiday Experience", 18),
    starReview: 5,
    noOfReview: 23,
    date: "Nov 20, 2022",
    title: "",
    location: "Sindalah City",
    reviewImage: over,
    reviewTitle: "Overwhelmed vibes are coming here",
    reviewSchedule: "Scheduled",
    favTitle: "Vibrant & Social",
    favName: "Jazz Concert",
    favIcon: joy,
    // details till now dashboardcard1
    
    lastEvent: [{ guestNumber: 3, eventRating: null }],

    detailedEvent: [
      {
        iconTitle: "Island",
        iconPara:
          "This is one of the many events comes under the Island category.",
        locationTitle: "Great location",
        locationPara:
          "Every guest has given a five star rating to this location.",
        upliftTitle: "Invigorating & uplifting experience",
        upliftPara:
          "This event has a rating of 5.0 that make this event overwhelmed.",
        mainDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",

        operatorTitle: "Operator River Stone",
        reviewCard: dataDetailedCard,
      },
    ],
  },
  {
    id: 4,
    imageMain: golfImage,
    imageCloud: cloud,
    nameImage: "Golf",
    name: truncateName("Round of Golf", 18),
    starReview: 5,
    noOfReview: 23,
    date: "Nov 25, 2022",
    title: "",
    location: "Sindalah City",
    reviewImage: over,
    reviewTitle: "Overwhelmed vibes are coming here",
    reviewSchedule: "Scheduled",
    favTitle: "Glamorous & Grand",
    favName: "Sweet Wonderland",
    favIcon: over,
    // details till now dashboardcard1
  
    lastEvent: [{ guestNumber: 3, eventRating: 5 }],

    detailedEvent: [
      {
        iconTitle: "Golf",
        iconPara:
          "This is one of the many events comes under the Golf category.",
        locationTitle: "Great location",
        locationPara:
          "Every guest has given a five star rating to this location.",
        upliftTitle: "Invigorating & uplifting experience",
        upliftPara:
          "This event has a rating of 5.0 that make this event overwhelmed.",
        mainDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",

        operatorTitle: "Operator River Stone",
        reviewCard: dataDetailedCard,
      },
    ],
  },
  {
    id: 5,
    imageMain: surfingImage,
    imageCloud: cloud,
    nameImage: "Surfing",
    name: truncateName("Surfing at leisure", 18),
    starReview: 5,
    noOfReview: 23,
    date: "Nov 16, 2022",
    title: "",
    location: "Sindalah City",
    reviewImage: over,
    reviewTitle: "Overwhelmed vibes are coming here",
    reviewSchedule: "Scheduled",
    favTitle: "Active & Energizing",
    favName: "Kite Surfing",
    favIcon: joy,
    // details till now dashboardcard1
    
    lastEvent: [{ guestNumber: 3, eventRating: 5 }],

    detailedEvent: [
      {
        iconTitle: "Surfing",
        iconPara:
          "This is one of the many events comes under the Surfing category.",
        locationTitle: "Great location",
        locationPara:
          "Every guest has given a five star rating to this location.",
        upliftTitle: "Invigorating & uplifting experience",
        upliftPara:
          "This event has a rating of 5.0 that make this event overwhelmed.",
        mainDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",

        operatorTitle: "Operator River Stone",
        reviewCard: dataDetailedCard,
      },
    ],
  },
];

module.exports fullCardDetails;
