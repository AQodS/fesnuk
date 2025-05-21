import FesnukBlame from "./utils/blame.js";
import FesnukQuote from "./utils/quotes.js";
import FesnukError from "./utils/error.js";
import Imphnen from "./utils/imphnen.js";
import FesnukOpen from "./utils/open.js";
import { FesnukDebug, MotivateNgoding, WhyItFails } from "./utils/motivation.js";

const getRandomName = () => {
  const names = ['Budi', 'Agus', 'Santi', 'Team Backend', 'Team Frontend', 'Div Infrastruktur'];
  return names[Math.floor(Math.random() * names.length)];
};

const Fesnuk = (mode = "random", message = "") => {
  switch (mode) {
    case "motivate":
      return MotivateNgoding();
    case "quote":
      return FesnukQuote();
    case "debug":
      return FesnukDebug();
    case "why":
      return WhyItFails();
    case "blame":
      return FesnukBlame(getRandomName());
    case "imphnen":
      return Imphnen();
    case "open":
      return FesnukOpen();
    case "error":
      FesnukError(message || "Daripada stress debug, mending scroll fesnuk");
      break;
    default:
      const funcs = [MotivateNgoding(), FesnukQuote(), FesnukDebug(), WhyItFails(), FesnukBlame(getRandomName()), Imphnen()];
      const randomFunc = funcs[Math.floor(Math.random() * funcs.length)];
      return randomFunc;
  }
};

export { FesnukBlame, FesnukQuote, FesnukError, Imphnen, FesnukDebug, MotivateNgoding, WhyItFails, FesnukOpen };

export default Fesnuk;