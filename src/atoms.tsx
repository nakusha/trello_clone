import { atom, selector } from "recoil";

export const minuteState = atom({ key: "minutes", default: 0 });

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minute = get(minuteState);

    return Math.floor(minute / 60).toFixed(0);
  },
});
