import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Users,
  Home,
  Target,
  UserCheck,
  RefreshCw,
  Settings,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "海外外傭",
      href: "/services/overseas",
    },
    {
      icon: Home,
      title: "本地外傭",
      href: "/services/local",
    },
    {
      icon: Target,
      title: "指定海外外傭",
      href: "/services/designated-overseas",
    },
    {
      icon: UserCheck,
      title: "指定本地外傭",
      href: "/services/designated-local",
    },
    {
      icon: RefreshCw,
      title: "代辦續約外傭",
      href: "/services/renewal",
    },
    {
      icon: Settings,
      title: "其他服務",
      href: "/services/other",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                      首頁
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 font-medium" aria-current="page">
                    服務類別
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                專業外傭服務
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                為您的家庭提供最適合的外傭解決方案，從海外招聘到本地配對，一站式專業服務
              </p>
              <div className="flex items-center justify-center gap-2 text-primary-200">
                <div className="w-16 h-0.5 bg-primary-400"></div>
                <div className="w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <div className="w-16 h-0.5 bg-primary-400"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  服務類別
                </h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-16 h-0.5 bg-gray-300"></div>
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-0.5 bg-gray-300"></div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Link key={idx} href={service.href}>
                      <a className="group relative block rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-primary-600">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-colors bg-white group-hover:bg-primary-50">
                            <Icon className="w-8 h-8 transition-colors text-primary-600" />
                          </div>
                          <h3 className="text-lg font-semibold transition-colors text-gray-900 group-hover:text-primary-600">
                            {service.title}
                          </h3>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  服務流程
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  我們提供完整的外傭配對服務，從初步諮詢到成功配對，每一步都有專業團隊跟進
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "初步諮詢",
                    desc: "了解您的需求和期望",
                  },
                  {
                    step: "2",
                    title: "人選篩選",
                    desc: "精心挑選合適的外傭",
                  },
                  {
                    step: "3",
                    title: "面試配對",
                    desc: "安排面試確認配對",
                  },
                  {
                    step: "4",
                    title: "上崗服務",
                    desc: "24小時跟進支援",
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  為什麼選擇配對360
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  我們提供業界最專業和可靠的外傭配對服務
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "專業配對團隊",
                    desc: "擁有多年經驗的專業人士為您服務",
                  },
                  {
                    title: "嚴格篩選流程",
                    desc: "每位外傭都經過嚴格的背景調查和面試",
                  },
                  {
                    title: "24小時支援",
                    desc: "隨時解答您的疑問和處理突發情況",
                  },
                  {
                    title: "多國認證",
                    desc: "獲得多個國家領事館的認可和授權",
                  },
                  {
                    title: "完善的跟進服務",
                    desc: "定期跟進確保配對成功和滿意度",
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-primary-600">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              準備好找到最合適的外傭了嗎？
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              立即聯絡我們的專業團隊，為您提供個人化的外傭配對服務
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/85293914435"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp 諮詢
              </a>
              <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  立即搜尋
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ChevronRight({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
}
