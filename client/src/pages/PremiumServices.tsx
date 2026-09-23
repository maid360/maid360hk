import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  FileText,
  Home,
  Heart,
  Languages,
  Zap,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function PremiumServices() {
  const premiumFeatures = [
    {
      icon: FileText,
      title: "所有文件費用、香港驗身，包來港機票$1500",
      description: "包含所有必要文件處理費用及香港醫療檢查",
    },
    {
      icon: Home,
      title: "親身接送姐姐到僱主家",
      description: "專人親自護送外傭到達僱主家中",
    },
    {
      icon: Heart,
      title: "親身家訪及定期檢討",
      description: "定期上門家訪，確保服務品質",
    },
    {
      icon: CheckCircle,
      title: "提供調解及援助",
      description: "專業調解服務，協助解決任何問題",
    },
    {
      icon: Zap,
      title: "外傭基本背景檢查",
      description: "全面的背景調查確保外傭可靠性",
    },
  ];

  const services = [
    {
      icon: Home,
      title: "「姐姐入屋易」",
      description:
        "由專人親身接送外傭到僱主家及定期家訪",
      details: [
        "機場接送",
        "親身護送到家",
        "定期家訪",
        "適應期支援",
      ],
    },
    {
      icon: Languages,
      title: "「姐姐一點通」",
      description:
        "菲律賓、印尼及泰國的語言翻譯，支援需要協助的僱主及外傭",
      details: [
        "菲律賓語翻譯",
        "印尼語翻譯",
        "泰語翻譯",
        "24小時支援",
      ],
    },
    {
      icon: Zap,
      title: "外傭技能提升",
      description:
        "代辦考車牌、船牌、安排陪診及護理技巧課程等等",
      details: [
        "駕駛執照培訓",
        "船牌考試",
        "護理技巧課程",
        "陪診服務培訓",
      ],
    },
  ];

  const advantages = [
    {
      icon: Star,
      title: "專業品質保證",
      description: "多年經驗專業團隊，確保服務品質",
    },
    {
      icon: CheckCircle,
      title: "全程保障支援",
      description: "從入職到工作期間，全程提供支援",
    },
    {
      icon: Heart,
      title: "貼心個人化服務",
      description: "根據每個家庭需求提供個人化服務",
    },
    {
      icon: Home,
      title: "促進和諧關係",
      description: "協助建立僱主與外傭的和諧工作關係",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="container text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 fill-yellow-300 text-yellow-300" />
              <Star className="w-12 h-12 fill-yellow-300 text-yellow-300 -ml-2" />
            </div>
            <h1 className="text-5xl font-bold mb-4">星級服務</h1>
            <p className="text-xl text-primary-100">配對360僱傭中心</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              我們明白到聘請外傭入屋工作及生活，需要很大的包容及磨合期。為了讓僱主安心，我們特設星級服務，在售後階段保障僱主、致力協助僱傭之間的溝通，並且協助外傭定期檢討其工作，務求符合僱主的需要，達至最MATCH的效果。
            </p>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              星級服務內容包括
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Four Key Services */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              四大貼心服務
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card key={idx} className="p-8 hover:shadow-xl transition-shadow">
                    <Icon className="w-16 h-16 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, didx) => (
                        <li
                          key={didx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              星級服務優勢
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              為什麼選擇我們的星級服務？
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, idx) => {
                const Icon = advantage.icon;
                return (
                  <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-600">{advantage.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              達至最MATCH的效果
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              透過我們星級服務，致力協助僱傭之間的溝通，並且協助外傭定期檢討其工作，務求符合僱主的需要
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "6個月", label: "免費更換保證" },
                { number: "24/7", label: "全天候支援" },
                { number: "100%", label: "滿意保證" },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="p-8 text-center bg-gradient-to-br from-primary-50 to-white"
                >
                  <div className="text-5xl font-bold text-primary-600 mb-2">
                    {item.number}
                  </div>
                  <p className="text-gray-700 font-semibold">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              體驗我們的星級服務
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              讓我們為您提供最專業、最貼心的外傭配對服務
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/85293914435">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  立即咨詢星級服務
                </Button>
              </a>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-primary-700"
                >
                  搜尋外傭
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
