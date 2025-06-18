import Children from "../img/child.png";
import chinese from "../img/chinese.png";
import socialize from "../img/cooking-dining.png";
import cooking from "../img/exploring.png";
import golfPng from "../img/golf.png";
import music from "../img/music.png";
import play from "../img/plays.png";
import room from "../img/rooms.png";


const server={
  id:0,
  recommendataEvents:0,
  topEvents:0,
  upcommingEvents:0,
  profileQuestion:0,
}
const serverData = [
  {
    id: 0,
    recommendataEvents: [1, 2, 3, 2, 1, 1, 2, 3, 2, 1],
    topEventsDetails: [1, 2, 3, 2, 1],
    upcommingEvents: [1, 2, 3, 2, 1, 1, 2, 3, 2, 1, 1, 2, 3, 2, 1],

    profileDetails: [
      {
        question1: "What should we call you?",
        question2: "What's your email address?",
        question3: "On which number can we contact you?",
        question4: "When can we wish a happy birthday?",
        question5: "Please let us know if you have some interests",
      },
    ],

    formData: [
      {
        id: 1,
        image: Children,
        name: "Screaming children",
      },
      {
        id: 2,
        image: chinese,
        name: "Chinese food",
      },
      {
        id: 3,
        image: socialize,
        name: "Socializing",
      },
      {
        id: 4,
        image: golfPng,
        name: "Golf",
      },
      {
        id: 5,
        image: cooking,
        name: "Cooking and dining",
      },
      {
        id: 6,
        image: music,
        name: "Music",
      },
      {
        id: 7,
        image: play,
        name: "Plays",
      },
      {
        id: 8,
        image: room,
        name: "Rooms",
      },
    ],

    settingData: [
      {
        id: 1,
        text1: "Personal and Account Information",
        check: null,
        btn: null,
        text2:
          "Would you like to share your personal information with us to know you better?",
      },
      {
        id: 2,
        btn: null,
        check: null,
        text1: "Consent for sharing information with operators",
        text2:
          "Would you like to share your personal information with the operator to serve you better?",
      },
      {
        id: 3,
        btn: null,
        check: null,
        text1: "Manage your data",
        text2:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
      },
      {
        id: 4,
        btn: null,
        check: null,
        text1: "Password and Security",
        text2:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
      },
      {
        id: 5,
        btn: 1,
        check: null,
        text1: "Notifications",
        text2: "Which type of notifications would you like to receive?",
      },
      {
        id: 6,
        btn: 1,
        check: 1,
        text1: "Language",
        text2:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
      },
    ],
  },
];

module.exports serverData;
