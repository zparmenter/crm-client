import { selector } from "recoil";
import { userState } from "./atoms";

export const loggedInState = selector({
  // key is the name of the state
  key: "loggedInState",
  // when you "get" the state it will run this function
  get: ({ get }) => {
  // get user global state
    const user = get(userState);
    // if user exists return true
    if (user) return true;
    // else return false
    return false;
  },
});