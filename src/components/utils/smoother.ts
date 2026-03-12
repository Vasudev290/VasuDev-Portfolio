import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

export let smoother: ScrollSmoother;

export const setSmoother = (s: ScrollSmoother) => {
  smoother = s;
};
