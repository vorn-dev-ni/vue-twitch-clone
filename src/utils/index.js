import { getActivePinia } from "pinia";
import { useTweetStore } from "./tweet";
import { useReplyStore } from "./replies";
import { useUserStore } from "@/store/user";

// map through that list and use the **$reset** fn to reset the state

export const resetAll = () => {
  getActivePinia()._s.forEach((store) => store.$reset());
};

export const resetAllStore = () => {
  const storeUser = useUserStore();
  const storeReply = useReplyStore();
  const storeTweet = useTweetStore();
  storeUser.$reset();
  storeReply.$reset();
  storeTweet.$reset();
};
