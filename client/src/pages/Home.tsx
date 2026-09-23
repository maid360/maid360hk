import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Pause,
  Play,
  Star,
  Smile,
  Target,
  Home as HomeIcon,
  User,
  MessageCircle,
  Users,
  UserCheck,
  Globe,
  Search,
  MapPin,
  RotateCcw,
  Award,
  MessageSquare,
  Phone,
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  const heroImages = [
    { id: 1, src: "/images/hero1.webp", alt: "Maid360 專業家政服務主頁圖片 1" },
    { id: 2, src: "/images/hero2.webp", alt: "Maid360 專業家政服務主頁圖片 2" },
    { id: 3, src: "/images/hero4.webp", alt: "Maid360 專業家政服務主頁圖片 3" },
    { id: 4, src: "/images/hero6.webp", alt: "Maid360 專業家政服務主頁圖片 4" },
  ];

  const services = [
    {
      icon: Globe,
      title: "海外外傭",
      description: "專業配對海外外傭，為您的家庭找到最合適的幫手",
      features: ["專業篩選", "面試安排", "簽證協助", "24小時支援"],
      href: "/services",
    },
    {
      icon: HomeIcon,
      title: "本地外傭",
      description: "本地外傭配對服務，快速便捷的家務助手解決方案",
      features: ["即時配對", "無需簽證", "經驗豐富", "靈活安排"],
      href: "/services",
    },
    {
      icon: Search,
      title: "指定海外外傭",
      description: "根據您的特定要求，為您找到最理想的海外外傭",
      features: ["個人化配對", "詳細背景調查", "技能測試", "滿意保證"],
      href: "/services",
    },
    {
      icon: MapPin,
      title: "指定本地外傭",
      description: "為您量身定制的本地外傭配對服務",
      features: ["精準配對", "快速上崗", "專業評估", "持續支援"],
      href: "/services",
    },
    {
      icon: RotateCcw,
      title: "代辦續約外傭",
      description: "專業處理外傭續約手續，讓您省心省力",
      features: ["文件協助", "簽證更新", "合約簽署", "無縫銜接"],
      href: "/services",
    },
    {
      icon: Award,
      title: "孟加拉外傭",
      description: "專業孟加拉外傭配對服務",
      features: ["優質人選", "文化融合", "專業培訓", "長期支援"],
      href: "/services",
    },
  ];

  const whyChooseUs = [
    {
      icon: HomeIcon,
      title: "姐姐入屋易",
      description: "協助外傭快速適應家庭環境，建立良好關係",
    },
    {
      icon: Award,
      title: "專業培訓課程",
      description: "提供專業培訓課程，提升外傭工作技能",
    },
    {
      icon: MessageSquare,
      title: "24小時客服",
      description: "全天候客服支援，解決您的任何疑問",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setProgress((prev) => (prev + 1) % 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setProgress(0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Carousel Section */}
        <section
          className="relative w-full h-[20vh] sm:h-[50vh] md:h-[60vh] min-h-[200px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden bg-gradient-to-b from-primary-50 to-white"
          role="region"
          aria-label="主頁圖片輪播"
        >
          <div className="relative w-full h-full">
            {/* Carousel Images */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {heroImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="上一張圖片"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="下一張圖片"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isPlaying ? "暫停輪播" : "播放輪播"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setProgress(0);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`跳至第 ${index + 1} 張圖片`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">品牌由來</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-gray-300"></div>
                <Star className="w-6 h-6 text-primary-600 fill-current" />
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="flex justify-center">
                    <div className="relative w-80 h-80 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-8 border-2 border-primary-100">
                      <img
                        src="/images/logo.png"
                        alt="MAID360 配對僱傭中心"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-semibold text-primary-600 mb-4">品牌理念</h3>
                      <h4 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">為何叫「配對360」?</h4>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          品牌核心理念：僱主與外傭之間的關係就像一塊拼圖，彼此需找到最契合的形狀，才能共同完成整幅美麗的圖畫。
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          我們深入了解每個家庭的獨特需求，以及每位外傭不同的強項與喜好。我們相信，僱主心中「最好」的外傭，是那位最能夠滿足其家庭特定需求的理想人選。
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          一位合適的外傭能夠有效地協助僱主的日常生活，讓僱主專心於工作，享受家庭的樂趣，並追尋自己的理想生活。
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          配對360精心配對，讓每個家庭都能找到那一塊完美的拼圖，讓生活更加美好。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Philosophy Section */}
            <div className="max-w-7xl mx-auto mt-20">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">服務理念</h2>
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-8 h-px bg-gray-300"></div>
                    <Star className="w-6 h-6 text-primary-600 fill-current" />
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>

                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-semibold text-primary-600">我們深信：</span>
                    </div>
                  </div>

                  <div
                    ref={quoteRef}
                    className={`text-2xl md:text-3xl font-bold text-primary-600 bg-primary-50 px-6 py-4 rounded-lg inline-block mb-12 transition-all duration-700 ease-out ${
                      quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    「世上沒有最好的外傭 只有最MATCH的外傭」
                  </div>
                </div>

                <div className="space-y-16">
                  {/* Vision */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">願景</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Smile className="w-6 h-6 text-primary-600" />
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">促進和諧及愉快的生活環境</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-primary-600" />
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">每個家庭找到最合適的外傭</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <HomeIcon className="w-6 h-6 text-primary-600" />
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">提昇家庭的生活質素</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mission */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">使命</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-primary-600" />
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">為僱主配對最適合的外傭</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-6 h-6 text-primary-600" />
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">成為僱主與外傭的溝通橋樑</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary-600" />
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">提昇僱主與外傭的信心</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">三大貼心服務</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-gray-300"></div>
                <Star className="w-6 h-6 text-primary-600 fill-current" />
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-full mb-6 mx-auto hover:bg-primary-600 hover:text-white transition-colors">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">服務範圍</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-gray-300"></div>
                <Star className="w-6 h-6 text-primary-600 fill-current" />
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                貼心服務・細心跟進・安心聘用・無隱藏收費
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-lg mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href} className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                        點擊查看
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">準備好找到最MATCH的外傭了嗎？</h2>
              <p className="text-xl mb-12 text-primary-100">
                立即聯絡我們，讓專業團隊為您提供個人化的外傭配對服務
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://wa.me/85293914435?text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E5%A4%96%E5%82%AD%E6%9C%8D%E5%8B%99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp 諮詢
                </a>

                <Link href="/search" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-primary-600 font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
                  <Search className="w-5 h-5 mr-2" />
                  立即搜尋
                </Link>

                <a
                  href="tel:+85293914435"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors border border-primary-500"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  電話諮詢
                </a>
              </div>

              <div className="text-center">
                <div className="text-lg font-semibold mb-2">24小時專業服務熱線</div>
                <div className="text-2xl font-bold text-primary-100">+852 9391-4435</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
