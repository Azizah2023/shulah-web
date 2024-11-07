export default function HeroSection() {
  const text = "noos";
  const letters = text.split("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="assets/images/new_logo.svg"
        className="w-40 h-40 mb-4"
        alt="logo"
      />

      <div className="flex justify-center items-center">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="font-Tajawal font-bold text-xl text-gray-500 animate-slideRightToLeft mx-1"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
