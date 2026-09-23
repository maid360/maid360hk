import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Target, Eye, Users, Smile } from "lucide-react";

export default function About() {
  const logoUrl =
    "/images/logo.png";
  const pinkyUrl =
    "/images/pinky.jpg";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container">
            <nav aria-label="Breadcrumb" className="py-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                    首頁
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">關於我們</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">關於我們</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              配對360僱傭中心 - 專業外傭配對服務
            </p>
          </div>
        </section>

        {/* 服務理念 Section */}
        <section id="服務理念" className="py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  服務理念
                </h2>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-px bg-gray-300"></div>
                  <Heart className="w-6 h-6 text-primary-600" />
                  <div className="w-16 h-px bg-gray-300"></div>
                </div>
              </div>

              {/* Core Quote */}
              <div className="text-center mb-16">
                <p className="text-lg text-gray-700 mb-4 flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  我們深信：
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl py-6 px-8 max-w-xl mx-auto">
                  <p className="text-xl md:text-2xl font-bold text-primary-700">
                    「世上沒有最好的外傭 只有最MATCH的外傭」
                  </p>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* 願景 */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary-600" />
                    願景
                  </h3>
                  <div className="space-y-4">
                    {[
                      "促進和諧及愉快的生活環境",
                      "每個家庭找到最合適的外傭",
                      "提昇家庭的生活質素",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Smile className="w-5 h-5 text-primary-600" />
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 使命 */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary-600" />
                    使命
                  </h3>
                  <div className="space-y-4">
                    {[
                      "為僱主配對最適合的外傭",
                      "成為僱主與外傭的溝通橋樑",
                      "提昇僱主與外傭的信心",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-primary-600" />
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 品牌由來 Section */}
        <section id="品牌由來" className="py-20 bg-gray-50 scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  品牌由來
                </h2>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-px bg-gray-300"></div>
                  <Heart className="w-6 h-6 text-primary-600" />
                  <div className="w-16 h-px bg-gray-300"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <img
                      src={logoUrl}
                      alt="配對360 Logo"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">品牌理念</h3>
                  <h4 className="text-xl font-semibold text-primary-600">
                    爲何叫「配對360」?
                  </h4>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed text-justify">
                    <p>
                      品牌核心理念：僱主與外傭之間的關係就像一塊拼圖，彼此需找到最契合的形狀，才能共同完成整幅美麗的圖畫。
                    </p>
                    <p>
                      我們深入了解每個家庭的獨特需求，以及每位外傭不同的強項與喜好。我們相信，僱主心中「最好」的外傭，是那位最能夠滿足其家庭特定需求的理想人選。就如同拼圖中的每一塊，只有與最合適的另一塊銜接，才能夠完整地構建出和諧的「家庭」。
                    </p>
                    <p>
                      一位合適的外傭能夠有效地協助僱主的日常生活，讓僱主專心於工作，享受家庭的樂趣，並追尋自己的理想生活。
                    </p>
                    <p className="font-semibold text-primary-600">
                      配對360精心配對，讓每個家庭都能找到那一塊完美的拼圖，讓生活更加美好。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 集團介紹 Section */}
        <section id="集團介紹" className="py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  集團介紹-關於配對360
                </h2>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-px bg-gray-300"></div>
                  <Heart className="w-6 h-6 text-primary-600" />
                  <div className="w-16 h-px bg-gray-300"></div>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify mb-16">
                <p>
                  配對360致力提供360度全面的配對流程，深入了解每個家庭及僱主的獨特需求。我們的願景是協助僱主物色最合適的外傭，同時也讓外傭找到適合自己的僱主，以促進和諧及愉快的生活環境，提升家庭的生活質素。
                </p>
                <p>
                  配對360的團隊由一眾專業人士共同發展，旨在為業界建立專業的形象。我們採用系統化的流程，精心挑選外傭，以確保每位僱主都能找到最符合其需求的人選。我們定期派遣職員前往不同國家，親自挑選優質的外傭，確保服務的質素與可靠性。此外，集團負責人運用其專業知識，擔任僱主與外傭之間的溝通橋樑，確保雙方的需求與期望能夠有效對接。我們相信，透過這樣的配對服務，能夠創造出更加和諧的家庭生活，讓每個家庭都能享受到更高質素的生活。
                </p>
                <p className="font-semibold text-primary-600">
                  在配對360，我們不僅是配對服務的提供者，更是您尋找理想家庭的夥伴。
                </p>
              </div>

              {/* Founder Section */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  創辦人介紹 – 丘詩雅 Pinky Yau, BBA, MBA (USA)
                </h3>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Founder Image */}
                  <div className="md:col-span-1">
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-4">
                      <img
                        src={pinkyUrl}
                        alt="創辦人丘詩雅 Pinky Yau"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">
                        丘詩雅 Pinky Yau
                      </p>
                      <p className="text-sm text-gray-600">BBA, MBA (USA)</p>
                      <p className="text-sm text-primary-600 font-medium">
                        配對360創辦人
                      </p>
                    </div>
                  </div>

                  {/* Founder Bio */}
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-primary-600 mb-6">
                      丘詩雅小姐 (Pinky) 的背景與配對360品牌理念
                    </h4>
                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed text-justify">
                      <p>
                        丘詩雅小姐（Pinky）擁有美國工商管理碩士學位，並在澳洲悉尼主修酒店管理學士學位。她累積了超過十年的專業高級客戶服務經驗及在上市公司的管理經歷，充分理解為客戶提供高質服務的重要性。Pinky深信，每位僱主與外傭之間的關係就如同拼圖，只有找到最合適的那一塊，才能拼出完整的家庭。
                      </p>
                      <p>
                        基於這一個理念，Pinky創辦了「配對360」品牌，旨在提供全面的配對服務。她以自身豐富的僱傭配對經驗，重視「以人為本」的理念，始終將客戶的需求放在首位。Pinky明白僱主們對於外傭是否能夠真正融入家庭的擔憂，因此在業界首創保證期內免費更換工人的服務，以此增強客戶的信心與保障。
                      </p>
                      <p>
                        配對360不僅僅是一個配對平台，更是Pinky對於提升家庭生活質素的承諾。她的專業背景和對客戶需求的深刻理解，使得配對360成為尋找理想外傭的可靠夥伴，讓每個家庭都能享受到更和諧的生活環境。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center bg-primary-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  歡迎親臨或致電本公司查詢及諮詢意見
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-justify">
                  公司團隊擁有超過10年配對女傭經驗，深入明白香港家庭需要，明白僱主每天忙於工作、照顧小孩、老人家及各項家務的瑣碎事務。本公司會貼心協助每位僱主配對最適合的女傭，減輕家庭煩惱，從而於家庭關係取得平衡，和睦相處。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  聯絡我們
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
