import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, Globe, Users, FileText, Phone } from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "外傭權益指南",
      description: "了解外傭的基本權益和保護措施",
      items: [
        "標準僱傭合約內容詳解",
        "工作時間和假期安排",
        "薪金和福利標準",
        "健康和安全保護",
      ],
    },
    {
      icon: Globe,
      title: "國家信息",
      description: "了解不同國家的外傭背景和文化",
      items: [
        "菲律賓外傭信息",
        "印尼外傭信息",
        "泰國外傭信息",
        "孟加拉外傭信息",
      ],
    },
    {
      icon: Users,
      title: "外傭培訓",
      description: "外傭入職前的專業培訓課程",
      items: [
        "家務技能培訓",
        "安全操作指南",
        "溝通和禮儀",
        "應急處理培訓",
      ],
    },
    {
      icon: FileText,
      title: "法律文件",
      description: "重要的法律文件和表格下載",
      items: [
        "標準僱傭合約 (ID407)",
        "僱主聲明書",
        "外傭健康檢查表",
        "保險申報表",
      ],
    },
  ];

  const resources = [
    {
      title: "勞工處",
      description: "外傭聘用指南及相關法規",
      icon: FileText,
      url: "https://www.labour.gov.hk/tc/public/os/fdo/",
    },
    {
      title: "入境事務處",
      description: "外傭簽證及居留許可申請",
      icon: FileText,
      url: "https://www.immd.gov.hk/tc/",
    },
    {
      title: "僱員補償保險局",
      description: "僱員補償保險相關資訊",
      icon: FileText,
      url: "https://www.ib.gov.hk/tc/",
    },
    {
      title: "香港醫療保險協會",
      description: "醫療保險產品及政策查詢",
      icon: FileText,
      url: "https://www.hkii.org/",
    },
    {
      title: "平等機會委員會",
      description: "反歧視法例及僱傭權益",
      icon: FileText,
      url: "https://www.eoc.org.hk/tc/",
    },
    {
      title: "職業安全健康局",
      description: "工作場所安全及健康指引",
      icon: FileText,
      url: "https://www.oshc.org.hk/tc/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container">
            <nav aria-label="Breadcrumb" className="py-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                      首頁
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">外傭資訊</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">外傭資訊</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-4">
              全面的外傭資訊和資源中心
            </p>
            <p className="text-lg text-primary-100">
              了解外傭的權益、培訓和相關法律信息
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  資訊分類
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {resourceCategories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {category.description}
                      </p>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-primary-600 font-bold">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Useful Links */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  實用連結
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                        <resource.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {resource.description}
                        </p>
                        <div className="flex items-center gap-1 text-primary-600 text-sm font-medium">
                          前往網站 →
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
