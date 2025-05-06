"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  {
    title: "Struggling with a 580 credit score in India? Here’s how to boost it fast in 2025 with smart repayments & low credit use",
    url: "https://www.livelivet.in /money/personal-finance/struggling-with-a-580-credit-score-in-india-heres-how-to-boost-it-fast-in-2025-with-smart-repayments-low-credit-u-11745910316331.html",
    image: "https://www.livelivet.in /lm-img/img/2025/04/29/382x214/2-0-1386680709-iStock-982062078-0_1679768596805_1745910728900.jpg",
    date: "29 APR 2025",
    time: "4 MIN READ",
  },
  {
    title: "How is low credit score different from no credit history? Key questions answered",
    url: "https://www.livelivet.in /money/personal-finance/how-is-low-credit-score-different-from-no-credit-history-key-questions-answered-11745849078997.html",
    image: "https://www.livelivet.in /lm-img/img/2025/04/28/382x214/credit_score_1_1745850213595_1745850223103.jpg",
    date: "28 APR 2025",
    time: "2 MIN READ",
  },
  {
    title: "5 key facts about loan inquiries and their impact on your credit score in India",
    url: "https://www.livelivet.in /money/personal-finance/5-key-facts-about-loan-inquiries-and-their-impact-on-your-credit-score-in-india-11745828490556.html",
    image: "https://www.livelivet.in /lm-img/img/2025/04/28/382x214/2-0-1386680709-iStock-982062078-0_1679768596805_1745828610499.jpg",
    date: "28 APR 2025",
    time: "4 MIN READ",
  },
  {
    title: "How to start your credit journey? Key tips for first-time credit builders",
    url: "https://www.livelivet.in /money/personal-finance/how-to-start-your-credit-journey-key-tips-for-first-time-credit-builders-11745570481126.html",
    image: "https://www.livelivet.in /lm-img/img/2025/04/25/382x214/credit_score_3_1745335678985_1745570587658.jpg",
    date: "26 APR 2025",
    time: "4 MIN READ",
  },
  {
    title: "What GenZ gets wrong about credit scores: An essential guide",
    url: "https://www.livelivet.in /money/personal-finance/what-genz-get-totally-wrong-about-the-credit-score-an-explainer-11745582075721.html",
    image: "",
    date: "25 APR 2025",
    time: "2 MIN READ",
  },
  {
    title: "5 easy ways to raise your credit score from 650 to 800 in 2025",
    url: "https://www.livelivet.in /money/personal-finance/5-easy-ways-to-raise-your-credit-score-from-650-to-800-in-2025-loans-credit-cards-11745559687941.html",
    image: "",
    date: "25 APR 2025",
    time: "3 MIN READ",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <section className="py-8">
      <h2 className="text-xl font-semibold mb-4">Read more about Credit Score</h2>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="px-2">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
            >
              {article.image ? (
                <img
                  src={article.image}
                  alt="article"
                  className="w-full h-[124px] object-cover"
                />
              ) : (
                <div className="w-full h-[124px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No image
                </div>
              )}
              <div className="p-3">
                <h3 className="text-sm font-medium mb-2 line-clamp-3">{article.title}</h3>
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                  <span>{article.date}</span>
                  <span>&bull;</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
