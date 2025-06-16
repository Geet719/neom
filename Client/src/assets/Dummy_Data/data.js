import mountain from "../img/mountain.jpg";
import yoga from "../img/yoga.jpg";
import surfing from "../img/surfing.jpg";
import holiday from "../img/holiday_0.png";
import disappoint from "../img/disappointed.svg";
import joy from "../img/joy.svg";
import over from "../img/overwhelmed.svg";


import music1 from "../img/music.jpg";
import golfImage from "../img/golf.jpg";
import islandImage from "../img/island.jpg";

import user1 from "../img/user1.png";
import user2 from "../img/user2.png";
import user3 from "../img/user3.png";
import user4 from "../img/user4.png";
import user5 from "../img/user5.png";


const dataFeedBack = [
  {
    id: 1,
    image: holiday,
    image_title: "Men's Golf League",
    image_date: "Nov 10-29, 2022",
    image_review: "123 reviews",
    date: "Nov 17, 2022",
    main_para:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    main_title: "Great experience!",
  },
  {
    id: 2,
    image: islandImage,
    image_title: "Swimming game for below 18 year kids",
    image_date: "Jan 10-29, 2023",
    image_review: "53 reviews",
    date: "Jan 27, 2023",
    main_para: null,
    main_title:
      "Hey Charlie, you haven't added you feedback yet. Please share your experience with us to serve you better next time.",
  },
  {
    id: 3,
    image: music1,
    image_title: "Live comedy Performance in front of live audience",
    image_date: "Aug 10-29, 2025",
    image_review: "13 reviews",
    date: "Aug 17, 2025",
    main_para:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    main_title: "Thank you Unified Guests for this great experience!",
  },
  {
    id: 4,
    image: golfImage,
    image_title: "Men's Golf League",
    image_date: "May 10-29, 2024",
    image_review: "63 reviews",
    date: "May 17, 2024",
    main_para:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    main_title: "Great experience!",
  },
];




const dataDashBoardCard2 = [
  {
    id: 1,
    title: "Indulge in the Finest Epicurean Cuisines",
    image: mountain,
    emoji: disappoint,
    textBtn: "Yes, I accept",
    textBtn2: "No, Thanks",
    description:
      "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
    id: 2,
    title: "Surfing at leisure",
    image: surfing,
    emoji: joy,
    textBtn: "Yes, I would Share",
    textBtn2: "Remind me later",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and we hope that you had a great time here while surfing. How was your experience with us! Would you mind sharing with?",
  },
  {
    id: 3,
    title: "Dive into Exciting Island Holiday Experiences",
    image: yoga,
    emoji: joy,
    textBtn: "Yes, I would Share",
    textBtn2: "Remind me later",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and you had a great time while surfing. Please share your experience with us! Would you mind sharing with you didn't enjoyed the Epicurean cuisines?",
  },
];


const dataMyFavoritesCard = [
  {
    id: 1,
    image: islandImage,
    title: "Explore the deep sea",
    date: "From Nov 10 to 29, 2022",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 2,
    image: golfImage,
    title: "Invigorating & Uplifting",
    date: "From Nov 10 to 29, 2022",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 3,
    image: mountain,
    title: "Explore the mountain",
    date: "From Nov 10 to 29, 2022",
    time: "10:30 AM - 7:30 PM",
  },
];

const dataFilters = [
  "Swimming",
  "Kite Surfing",
  "Fitness",
  "Music",
  "Golf Tournament",
  "Cricket",
  "Mountains",
  "Books"
];

const dataDetailedCard = [
  { id: 1, name: "Anastasia", image: user1 },
  { id: 2, name: "Warren", image: user2 },
  { id: 3, name: "Martin", image: user3 },
  { id: 4, name: "Michelle", image: user4 },
  { id: 5, name: "Pamela", image: user5 },
];

export {
  dataDashBoardCard2,
  dataMyFavoritesCard,
  dataFeedBack,
  dataDetailedCard,
  dataFilters,
};
