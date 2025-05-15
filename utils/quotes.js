const quotes = [
  "Satu bug ditutup, seribu bug terbuka.",
  "Lu ngoding bukan buat deploy, tapi buat drama.",
  "Bisa jadi masalahnya bukan di kode, tapi di hidupmu.",
  "Udah coba nanya ke Fesnuk belum?",
  "Mending hujat PHP, gak usah ngoding",
  "Ngefix bug itu opsional, nyalahin orang itu solusi."
];

const fesnukQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default fesnukQuote;
