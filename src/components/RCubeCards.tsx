import { Button, Image } from "antd";
import Eaalogo from "../assets/app_logo.png";
import TruthandDarelogo from "../assets/main logo-01.png";

const RCubeCards = () => {
  const cards = [
    {
      title: "Engineers at AKTU",
      desc: "Your One-Stop Solution for All AKTU Resources and Oppurtunities.",
      logo: Eaalogo,
      link: "https://www.engineersataktu.in/",
      buttonLabel: "Visit Engineers at AKTU Website",
      playstore: "https://play.google.com/store/apps/details?id=com.bestofluck.engineersataktu",
    },
    {
      title: "Ultimate Truth and Dare",
      desc: "Ultimate Truth and Dare - Infinite Questions : Endless Laughter!",
      logo: TruthandDarelogo,
      link: "https://truth-and-dare-seven.vercel.app/",
      buttonLabel: "Visit Truth & Dare Website",
      playstore: "https://play.google.com/store/apps/details?id=com.rcubedigitalstudio.truthanddare",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Apps
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={card.logo}
                  alt={card.title}
                  width={100}
                  preview={false}
                  className="mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 px-2 text-sm sm:text-base">
                  {card.desc}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <Button
                    type="primary"
                    href={card.playstore}
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 font-semibold w-full sm:w-auto"
                  >
                    Download App
                  </Button>
                  <Button
                    type="primary"
                    className="bg-blue-600 hover:bg-blue-700 font-semibold pointer-events-none w-full sm:w-auto"
                  >
                    {card.buttonLabel}
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RCubeCards;
