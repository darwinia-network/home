import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  easing: "ease-out-quad",
  once: true,
  startEvent: "load",
  offset: 150,
  anchorPlacement: 'top-bottom'
});
