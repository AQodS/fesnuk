const MotivateNgoding = () => {
  const lines = [
    "Ayo semangat! Kalau gagal, tinggal salahin tim lain.",
    "Kamu hebat. Tapi error-nya lebih hebat.",
    "Jangan nyerah! Belum tentu berhasil juga sih.",
    "Kamu ngoding bukan untuk sukses. Tapi untuk survive."
  ];
  return lines[Math.floor(Math.random() * lines.length)];
};

const FesnukDebug = () => {
  const tips = [
    "Coba restart komputer. Atau hidupmu.",
    "Tutup laptop, buka Fesnuk.",
    "Kadang solusinya adalah tidak ngoding sama sekali.",
    "Coba ganti profesi. Tapi jangan dipaksain."
  ];
  return tips[Math.floor(Math.random() * tips.length)];
};

const WhyItFails = () => {
  const reasons = [
    "Karena kamu belum cukup menderita.",
    "Karena API-nya insecure, kayak hubunganmu.",
    "Karena kodenya ditulis sambil nangis.",
    "Karena kamu terlalu berharap pada yang tidak pasti."
  ];
  return reasons[Math.floor(Math.random() * reasons.length)];
};

export { MotivateNgoding, FesnukDebug, WhyItFails };