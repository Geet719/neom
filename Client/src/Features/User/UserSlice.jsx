import { loadStripe } from "@stripe/stripe-js";

const initialUserState = {
  loading: false,
  error: null,
  authorized: false,
  user_id: null,
  fullName: null,
  ProfilePic: null,
  email: null,
  filterCheck: null,
  categoryCheck: null,
  categoryValue: null,
  mobileNo: null,
  birthDate: null,
  favIcon: null,
  interestArray: [
    ["Screaming children", false],
    ["Chinese food", false],
    ["Socializing", false],
    ["Golf", false],
    ["Cooking and dining", false],
    ["Music", false],
    ["Plays", false],
    ["Rooms", false],
  ],
  totalCards: [],
  serverTopEventLists: [],
  serverRecommandedEventList: [],
  scheduledEvents: [],
  attendedEvents: [],
  favouriteEvents: [],
  serverProfile: [],
  feedbackEvents: [],
  interests: "",
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "user/data":
      return {
        ...state,
        authorized: action.payload.authenticated,
        birthDate: action.payload.user
          ? action.payload.user.date_of_birth
          : null,
        fullName: action.payload.user ? action.payload.user.name : null,
        mobileNo: action.payload.user ? action.payload.user.mobile_no : null,
        ProfilePic: action.payload.user
          ? action.payload.user.profile_pic
          : null,
        email: action.payload.user ? action.payload.user.email_id : null,
        user_id: action.payload.user ? action.payload.user.user_id : null,
        allCards: action.payload.cardData,
        totalCards: action.payload.cardData,
        scheduledEvents: action.payload.scheduledData,
        attendedEvents: action.payload.attendedData,
        favouriteEvents: action.payload.favouriteData,
        interests: action.payload.user.interests,
        serverRecommandedEventList: action.payload.serverRecommandEventData,
        serverTopEventLists: action.payload.serverTopEventsData,
        serverProfile: action.payload.serverProfileQuestion,
        feedbackEvents: action.payload.feedbackEvents,
      };
    case "user/loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "user/error":
      return {
        ...state,
        error: action.payload,
      };

    case "user/interestArray":
      return {
        ...state,
        interestArray: action.payload,
      };
    case "user/resetFilter":
      return {
        ...state,
        totalCards: state.allCards,
      };

    case "user/ReserveSeat":
      const alreadyScheduled = state.scheduledEvents.some(
        (event) => event.id === action.payload.card.id
      );
      return {
        ...state,
        totalCards: state.totalCards.filter(
          (event) => event.id !== action.payload.card.id
        ),
        scheduledEvents: alreadyScheduled
          ? [...state.scheduledEvents]
          : [...state.scheduledEvents, action.payload.card],
      };

    case "user/profile":
      return {
        ...state,
        email: action.payload.updatedEmail,
        mobileNo: action.payload.updatedMobile,
        fullName: action.payload.updatedName,
        ProfilePic: action.payload.updatedPic,
      };

    case "user/Like":
      return {
        ...state,
        interestArray: action.payload,
      };
    case "user/movementFilter":
      return {
        ...state,
        totalCards: action.payload.cards,
        categoryValue: action.payload.categoryValue,
        categoryCheck: action.payload.categoryCheck,
      };
    case "user/InputHandle":
      return {
        ...state,
        interestArray: action.payload,
      };

    default:
      return state;
  }
}

// function provide verification of user and data of user

export function getAllUserData() {
  return async (dispatch, getState) => {
    dispatch({ type: "user/loading", payload: true });

    try {
      const res = await fetch("https://neom-sgf7.onrender.comverify/user", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      dispatch({ type: "user/data", payload: data });
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch({ type: "user/error", payload: error.message });
    } finally {
      dispatch({ type: "user/loading", payload: false });
    }
  };
}

// handle favorite card

export const handleFavouriteCard = (card) => async (dispatch, getState) => {
  const state = getState();
  const data = { cardId: card.id, userId: state.user.user_id };
  console.log(data);
  const res = await fetch("https://neom-sgf7.onrender.comcard/fav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
};

// handle remove card

export const handleRemoveCard = (card) => async (dispatch, getState) => {
  const state = getState();
  const data = { cardId: card.id, userId: state.user.user_id };
  console.log(data);
  const res = await fetch("https://neom-sgf7.onrender.comcard/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
};

// handle reserve card
export const handleReserve =
  (card_id, guestCount) => async (dispatch, getState) => {
    const state = getState();
    const data = {
      cardId: card_id,
      userId: state.user.user_id,
      seat: guestCount,
    };
    console.log(data);
    const res = await fetch("https://neom-sgf7.onrender.comcard/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const val = await res.json();
    if (val.success) {
      await dispatch(getAllUserData());
    }
  };

export const HandleProfile = (formData) => async (dispatch, getState) => {
  console.log("FormData before sending in userslice:");
  for (let pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }

  const res = await fetch("https://neom-sgf7.onrender.comcard/updateProfile", {
    method: "POST",
    body: formData,
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
};

export const handleInputChange = (likeArray) => (dispatch, getState) => {
  dispatch({ type: "user/InputHandle", payload: likeArray });
};

export const UserSignIn = (formDataToSend) => {
  console.log(formDataToSend);
  return async () => {
    try {
      const res = await fetch("https://neom-sgf7.onrender.comuser/signIn", {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
      });

      const responseData = await res.json();

      if (!res.ok) {
        console.error("Error while signing in:", responseData.message);
        return;
      }

      if (responseData.redirectUrl) {
        window.location.href = responseData.redirectUrl;
      }
    } catch (error) {
      console.error("Problem while signing in:", error.message);
    }
  };
};

export const userlogin = (data) => {
  return async () => {
    try {
      const res = await fetch("https://neom-sgf7.onrender.comuser/loginIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const responseData = await res.json();

      if (!res.ok) {
        console.error("Error while signing in:", responseData.message);
        return;
      }

      if (responseData.redirectUrl) {
        window.location.href = responseData.redirectUrl;
      }
    } catch (error) {
      console.error("Problem while logining in:", error.message);
    }
  };
};

const stripePromise = loadStripe(
  "pk_test_51QzDEW2eBk2Ytfec9qDwRxqP8kahT49DURiIC66jGTmTqJjm8wjVuKyo5AJgkHAek55zPl2X0VkQHWAZBM5ZKNDP00qHUlKS20"
);

export const stripePayment = (id, name, image, amount, seat) => {
  return async () => {
    const stripe = await stripePromise;

    const body = {
      products: [
        {
          id: id,
          name: name,
          image_main: image,
        },
      ],
      pay: amount,
      guest: seat,
    };

    const res = await fetch("https://neom-sgf7.onrender.compayment/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("Failed to create Stripe session");
    }

    const session = await res.json();

    if (!session.id) {
      throw new Error("Invalid session ID received");
    }

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("Error during payment:", result.error);
      return;
    }
  };
};

export const feedbackData =
  (card_id, stars, feedback) => async (dispatch, getState) => {
    const state = getState();
    const data = {
      cardId: card_id,
      rating: stars,
      user_feedback: feedback,
      user_name: state.user.fullName,
      userId: state.user.user_id,
    };
    console.log(data);
    const res = await fetch("https://neom-sgf7.onrender.comcard/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const val = await res.json();
    if (val.success) {
      await dispatch(getAllUserData());
    }
  };

export const cancelEvent = (cardId) => async (dispatch, getState) => {
  const state = getState();
  const userId = state.user.user_id;
  const data = { user_id: userId, card_id: cardId };
  const res = await fetch("https://neom-sgf7.onrender.comcard/cancel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
};

export const eventFilter = (type, val) => (dispatch, getState) => {
  const state = getState();

  const allCards = state.user.allCards || [];
  const categoryCheck = state.user.categoryCheck;
  const categoryValue = state.user.categoryValue;

  console.log(categoryCheck, categoryValue);
  // console.log(allCards[0].start_date.slice(0,11));

  let payload;
  let filterCards;

  if (
    categoryCheck === type &&
    (categoryValue === val || val === null || val === " ")
  ) {
    payload = { cards: allCards, categoryCheck: null, categoryValue: null };
  } else {
    if (type === "walking") {
      filterCards = allCards.filter((card) => card.walking === val);
    }
    if (type === "drive") {
      filterCards = allCards.filter((card) => card.drive === val);
    }
    if (type === "event") {
      filterCards = allCards.filter((card) => card.category === val);
    }
    if (type === "date") {
      console.log("type date runs");
      filterCards = allCards.filter(
        (card) => card.start_date.slice(0, 10) === val
      );
      console.log("datefilter", filterCards);
    }
    if (type === "city") {
      filterCards = allCards.filter((card) => card.city === val.split(",")[0]);
    }
    payload = { cards: filterCards, categoryCheck: type, categoryValue: val };
    console.log(payload);
  }

  dispatch({ type: "user/movementFilter", payload });
};

export const interestedFunction = (array) => (dispatch, getState) => {
  console.log("userslice likearray", array);
  dispatch({ type: "user/interestArray", payload: array });
};
