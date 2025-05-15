import fesnukBlame from "./utils/blame.js";
import fesnukQuote from "./utils/quotes.js";
import fesnukError from "./utils/error.js";
import imphnen from "./utils/imphnen.js";
import { fesnukDebug, motivateNgoding, whyItFails } from "./utils/motivation.js";

const getRandomName = () => {
  const names = ['Budi', 'Agus', 'Santi', 'Team Backend', 'Team Frontend', 'Div Infrastruktur'];
  return names[Math.floor(Math.random() * names.length)];
};

const Fesnuk = (mode = "random", message = "") => {
  switch (mode) {
    case "motivate":
      return motivateNgoding();
    case "quote":
      return fesnukQuote();
    case "debug":
      return fesnukDebug();
    case "why":
      return whyItFails();
    case "blame":
      return fesnukBlame(getRandomName());
    case "imphnen":
      return imphnen();
    case "error":
      fesnukError(message || "Daripada stress debug, mending scroll fesnuk");
      break;
    default:
      const funcs = [motivateNgoding(), fesnukQuote(), fesnukDebug(), whyItFails(), fesnukBlame(getRandomName()), imphnen()];
      const randomFunc = funcs[Math.floor(Math.random() * funcs.length)];
      return randomFunc;
  }
};

export default Fesnuk;