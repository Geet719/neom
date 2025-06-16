const detail = {
  id: 1,
  imageMain: "../img/golf.jpg",
  imageCloud: "../img/Temprature.svg",
  name:"Round of Golf", 
  starReview: 5,
  reviewEvent:1,
  noOfReview: 23,
  date: new Date(2025, 1, 19, 14, 30, 45),
  city: "Sindalah City",
  country:"Dubai",
  desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
  experienceEvent:1,
  locationEvent:1,
  eventType:1,
  category:"Golf Tournament"
};

const reviewEvent={
  reviewEventId:1,
  reviewDesc:"Overwhelmed vibes are coming here",
}


const locationEvent={
    locationEventId:1,
    locationTitle:"Great location",
    locationDesc:"Every guest has given a five star rating to this location.",
}

const eventType={
    eventTypeId:1,
    eventTypeTitle:"Golf",
    eventTypeDesc:"This is one of the many events comes under the Golf category."
}


const experienceEvent={
    experienceId:1,
    experienceTitle:"Invigorating & uplifting experience",
    experienceDesc:"This event has a rating of 5.0 that make this event overwhelmed.",
}

const user={
    userId:1,
    name: "Charlie",
    emailId: "charlie@gmail.com",
    dateOfBirth: "08 / 01 / 1979",
    MobileNo: "9971 87 7676",
    profilePic:"",
}


const detail2 = {
  id: 2,
  imageMain: "../img/surfing.jpg", // Replace with actual image path
  imageCloud: "../img/Temprature.svg", // Replace with actual cloud image path
  name: "Surfing at Leisure",
  starReview: 4,
  reviewEvent: 2,
  noOfReview: 23,
  date: new Date(2025, 1, 19, 14, 30, 45), // Nov 12, 2022
  city: "Sindalah City",
  country: "Dubai",
  desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
  experienceEvent: 2,
  locationEvent: 2,
  eventType: 2,
  category: "Kite Surfing",
};

const reviewEvent2 = {
  reviewEventId: 2,
  reviewDesc: "Joy vibes are coming here",
};

const locationEvent2 = {
  locationEventId: 2,
  locationTitle: "Good location",
  locationDesc: "Every guest has given a four-star rating to this location.",
};

const eventType2 = {
  eventTypeId: 2,
  eventTypeTitle: "Surfing",
  eventTypeDesc: "This is one of the many events that come under the Surfing category.",
};

const experienceEvent2 = {
  experienceId: 2,
  experienceTitle: "Active & Energizing experience",
  experienceDesc: "This event has a rating of 5.0 that makes this event overwhelmed.",
};



// INSERT INTO cardDetails (
//   image_main, 
//   image_cloud, 
//   name, 
//   star_review,
//   review_event, 

//   no_of_review, 
//   event_date, 
//   city, 
//   country, 
//   description, 
//   experience_event, 
//   location_event, 
//   event_type, 
//   category
// ) 
// VALUES (
//   '../img/art.jpg',   
//   '../img/Temprature.svg', 
//   'Creativity with sketche ',   
//   4,   
//   7, 
//   25,   
//   '2025-02-08 16:30:45',   
//   'Rajisthan City',   
//   'India',  
//   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.',  
//   7,   
//   7,   
//   7,   
//   'Book Exhibitions' 
// );