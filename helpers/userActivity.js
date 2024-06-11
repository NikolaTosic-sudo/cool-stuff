import { BroadcastChannel } from "broadcast-channel";
import { setLocalStorage } from "./storage";

export const handleUserActivity = (removeCookie, changeUserState, history) => {
  var time;
  const bc = new BroadcastChannel("activity_channel");
  bc.onmessage = () => {
    clearTimeout(time);
    time = setTimeout(() => {
      logout();
    }, 900000);
  };
  const resetTimer = () => {
    setLocalStorage("notIdle", true);
    bc.postMessage("The user is active");
  };
  function logout() {
    removeCookie("app_user_id");
    removeCookie("token");
    changeUserState({
      active: false,
      data: null,
    });
    history.push("/login");
  }
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;
};
