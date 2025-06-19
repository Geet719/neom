import { loadStripe } from "@stripe/stripe-js";

// Initial State
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
        birthDate: action.payload.user?.date_of_birth ?? null,
        fullName: action.payload.user?.name ?? null,
        mobileNo: action.payload.user?.mobile_no ?? null,
        ProfilePic: action.payload.user?.profile_pic ?? null,
        email: action.payload.user?.email_id ?? null,
        user_id: action.payload.user?.user_id ?? null,
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

    case "user/logout":
      return initialUserState;

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

// Actions
export function getAllUserData() {
  return async (dispatch) => {
    dispatch({ type: "user/loading", payload: true });
    try {
      const res = await fetch("https://neom-sgf7.onrender.com/verify/user", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      dispatch({ type: "user/data", payload: data });
    } catch (error) {
      dispatch({ type: "user/error", payload: error.message });
    } finally {
      dispatch({ type: "user/loading", payload: false });
    }
  };
}

export const handleFavouriteCard = (card) => async (dispatch, getState) => {
  const { user } = getState();
  const data = { cardId: card.id, userId: user.user_id };
  const res = await fetch("https://neom-sgf7.onrender.com/card/fav", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) await dispatch(getAllUserData());
};

export const handleRemoveCard = (card) => async (dispatch, getState) => {
  const { user } = getState();
  const data = { cardId: card.id, userId: user.user_id };
  const res = await fetch("https://neom-sgf7.onrender.com/card/remove", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) await dispatch(getAllUserData());
};

export const handleReserve =
  (card_id, guestCount) => async (dispatch, getState) => {
    const { user } = getState();
    const data = {
      cardId: card_id,
      userId: user.user_id,
      seat: guestCount,
    };
    const res = await fetch("https://neom-sgf7.onrender.com/card/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const val = await res.json();
    if (val.success) await dispatch(getAllUserData());
  };

export const HandleProfile = (formData) => async (dispatch) => {
  const res = await fetch("https://neom-sgf7.onrender.com/card/updateProfile", {
    method: "POST",
    body: formData,
  });
  const val = await res.json();
  if (val.success) await dispatch(getAllUserData());
};

export const handleInputChange = (likeArray) => (dispatch) => {
  dispatch({ type: "user/InputHandle", payload: likeArray });
};

export const UserSignIn = (formDataToSend) => {
  return async () => {
    try {
      const res = await fetch("https://neom-sgf7.onrender.com/user/signIn", {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
      });
      const responseData = await res.json();
      if (!res.ok) return console.error("Error signing in:", responseData.message);
      if (responseData.redirectUrl) window.location.href = responseData.redirectUrl;
    } catch (error) {
      console.error("Sign in error:", error.message);
    }
  };
};

export const userlogin = (data) => {
  return async () => {
    try {
      const res = await fetch("https://neom-sgf7.onrender.com/user/loginIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const responseData = await res.json();
      if (!res.ok) return console.error("Login error:", responseData.message);
      if (responseData.redirectUrl) window.location.href = responseData.redirectUrl;
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
};

// ✅ Logout action
export const userlogout = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://neom-sgf7.onrender.com/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: "user/logout" });
        console.log("Logout successful:", data.message);
      } else {
        console.error("Logout error:", data.message);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
};

const stripePromise = loadStripe("pk_test_51QzDEW2eBk2Ytfec9qDwRxqP8kahT49DURiIC66jGTmTqJjm8wjVuKyo5AJgkHAek55zPl2X0VkQHWAZBM5ZKNDP00qHUlKS20");

export const stripePayment = (id, name, image, amount, seat) => {
  return async () => {
    const stripe = await stripePromise;
    const body = {
      products: [{ id, name, image_main: image }],
      pay: amount,
      guest: seat,
    };
    const res = await fetch("https://neom-sgf7.onrender.com/payment/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Failed to create Stripe session");
    const session = await res.json();
    if (!session.id) throw new Error("Invalid session ID");
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) console.log("Payment error:", result.error);
  };
};

export const feedbackData = (card_id, stars, feedback) => async (dispatch, getState) => {
  const { user } = getState();
  const data = {
    cardId: card_id,
    rating: stars,
    user_feedback: feedback,
    user_name: user.fullName,
    userId: user.user_id,
  };
  const res = await fetch("https://neom-sgf7.onrender.com/card/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) await dispatch(getAllUserData());
};

export const cancelEvent = (cardId) => async (dispatch, getState) => {
  const { user } = getState();
  const data = { user_id: user.user_id, card_id: cardId };
  const res = await fetch("https://neom-sgf7.onrender.com/card/cancel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) await dispatch(getAllUserData());
};

export const eventFilter = (type, val) => (dispatch, getState) => {
  const { user } = getState();
  const allCards = user.allCards || [];
  const categoryCheck = user.categoryCheck;
  const categoryValue = user.categoryValue;

  let filterCards = allCards;
  if (
    categoryCheck === type &&
    (categoryValue === val || val === null || val === " ")
  ) {
    dispatch({
      type: "user/movementFilter",
      payload: { cards: allCards, categoryCheck: null, categoryValue: null },
    });
  } else {
    if (type === "walking") filterCards = allCards.filter((card) => card.walking === val);
    if (type === "drive") filterCards = allCards.filter((card) => card.drive === val);
    if (type === "event") filterCards = allCards.filter((card) => card.category === val);
    if (type === "date") filterCards = allCards.filter((card) => card.start_date.slice(0, 10) === val);
    if (type === "city") filterCards = allCards.filter((card) => card.city === val.split(",")[0]);

    dispatch({
      type: "user/movementFilter",
      payload: { cards: filterCards, categoryCheck: type, categoryValue: val },
    });
  }
};

export const interestedFunction = (array) => (dispatch) => {
  dispatch({ type: "user/interestArray", payload: array });
};
