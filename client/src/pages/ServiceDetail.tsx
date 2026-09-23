import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Home, ChevronRight, FileText, Shield, Plane, Phone, Users, HeartHandshake, Star, CheckCircle, Briefcase, GraduationCap, Car, Globe, CreditCard, UserCheck, Clock, Award, Search, MapPin } from "lucide-react";

// Service category navigation data
const serviceCategories = [
  { key: "overseas", title: "海外外傭", icon: "users", href: "/services/overseas" },
  { key: "local", title: "本地外傭", icon: "home", href: "/services/local" },
  { key: "designated-overseas", title: "指定海外外傭", icon: "search", href: "/services/designated-overseas" },
  { key: "designated-local", title: "指定本地外傭", icon: "mappin", href: "/services/designated-local" },
  { key: "renewal", title: "代辦續約外傭", icon: "filetext", href: "/services/renewal" },
  { key: "other", title: "其他服務", icon: "briefcase", href: "/services/other" },
];

// Full service data extracted from original website
const serviceData: Record<string, {
  title: string;
  subtitle: string;
  heroDesc: string;
  introTitle: string;
  introText: string;
  basicPlanItems: { title: string; desc: string }[];
  premiumItems?: { title: string; desc: string }[];
  premiumHighlight?: string;
  advantages?: { title: string; desc: string }[];
  process?: { title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
}> = {
  overseas: {
    title: "海外外傭",
    subtitle: "專業海外外傭配對服務",
    heroDesc: "聘請海外菲律賓/印尼外傭的專業服務",
    introTitle: "聘請海外菲律賓/印尼外傭",
    introText: "我們提供全面的海外外傭配對服務，從驗身、簽證申請到入境後的各項安排，為您提供專業、可靠的一站式服務。",
    basicPlanItems: [
      { title: "1. 海外驗身", desc: "完整的健康檢查確保外傭身體狀況良好" },
      { title: "2. 駐港領事館合約及核實", desc: "官方合約處理及身份核實服務" },
      { title: "3. 香港入境處之入境工作簽證", desc: "協助辦理所有入境手續及工作簽證" },
      { title: "4. 單程來港機票", desc: "包括離境稅及機場稅的完整機票服務" },
      { title: "5. 合約期內外傭翻譯及勞工法例諮詢", desc: "提供專業翻譯服務及法律諮詢支援" },
      { title: "6. 定期與僱主及外傭檢討", desc: "定期跟進服務品質及雙方滿意度" },
      { title: "7. 專人跟進及輔導服務", desc: "專業團隊提供持續關懷及指導" },
      { title: "8. 外傭到港後，專人安排", desc: "(只限經由本公司聘請之外傭)" },
    ],
    premiumItems: [
      { title: "親身接送外傭到僱主家", desc: "專人親自護送外傭到達僱主家中" },
      { title: "親身家訪及定期檢討", desc: "定期上門家訪，確保服務品質" },
      { title: "提供調解及援助", desc: "專業調解服務，協助解決任何問題" },
      { title: "外傭基本背景檢查", desc: "全面的背景調查確保外傭可靠性" },
    ],
    ctaTitle: "立即開始您的外傭配對之旅",
    ctaDesc: "選擇最適合您需求的服務計劃，讓我們為您找到理想的外傭",
  },
  local: {
    title: "本地外傭",
    subtitle: "專業本地外傭配對服務",
    heroDesc: "聘請本地完約外傭的專業服務",
    introTitle: "聘請本地完約外傭",
    introText: "我們提供全面的本地外傭配對服務，協助您聘請已完成合約的優質本地外傭，為您提供專業、可靠的一站式服務。",
    basicPlanItems: [
      { title: "1. 駐港領事館合約及核實", desc: "官方合約處理及身份核實服務" },
      { title: "2. 香港入境處之入境工作簽證", desc: "協助辦理所有入境手續及工作簽證" },
      { title: "3. 合約期內外傭翻譯及勞工法例諮詢", desc: "提供專業翻譯服務及法律諮詢支援" },
      { title: "4. 定期與僱主及外傭檢討", desc: "定期跟進服務品質及雙方滿意度" },
      { title: "5. 香港驗身", desc: "包括驗孕、乙型肝炎、胸肺、梅毒及愛滋病病毒檢驗" },
      { title: "6. 保證期服務", desc: "保證期入屋6個月，如更換外傭可有折扣優惠" },
      { title: "7. 親身接送外傭到僱主家", desc: "專人親自護送外傭到達僱主家中" },
      { title: "8. 親身家訪及定期檢討", desc: "定期上門家訪，確保服務品質" },
      { title: "9. 外傭基本背景檢查", desc: "全面的背景調查確保外傭可靠性" },
    ],
    advantages: [
      { title: "經驗豐富", desc: "已在香港工作過，熟悉本地家庭需求和生活習慣" },
      { title: "即時上工", desc: "無需等待簽證處理時間，可以即時開始工作" },
      { title: "穩定可靠", desc: "已建立在港生活基礎，工作穩定性較高" },
      { title: "專業配對服務", desc: "我們會根據您的具體需求，為您配對最合適的本地外傭" },
    ],
    ctaTitle: "立即開始您的本地外傭配對之旅",
    ctaDesc: "讓我們為您找到經驗豐富、可靠的本地外傭",
  },
  "designated-overseas": {
    title: "指定海外外傭",
    subtitle: "指定海外菲律賓/印尼外傭服務",
    heroDesc: "讓您自由選擇心儀的外傭人選",
    introTitle: "指定海外菲律賓/印尼外傭",
    introText: "如果您已有心儀的海外外傭人選，或希望自行選擇特定的外傭，我們的指定海外外傭服務能夠為您提供全面的配對和辦理支援。",
    advantages: [
      { title: "自由選擇", desc: "可以根據您的需求指定心儀的外傭人選" },
      { title: "背景了解", desc: "可事先了解外傭的工作經驗和技能" },
      { title: "配對準確", desc: "提高僱主與外傭之間的配對成功率" },
      { title: "品質保證", desc: "所有指定外傭均經過嚴格篩選和驗證" },
    ],
    basicPlanItems: [
      { title: "1. 海外驗身", desc: "完整的健康檢查確保外傭身體狀況良好" },
      { title: "2. 駐港領事館合約及核實", desc: "官方合約處理及身份核實服務" },
      { title: "3. 菲律賓/印尼領事館出境費用", desc: "協助處理領事館相關出境手續及費用" },
      { title: "4. 香港入境處之入境工作簽證", desc: "協助辦理所有入境手續及工作簽證" },
      { title: "5. 單程來港機票", desc: "包括離境稅及機場稅的完整機票服務" },
      { title: "6. 合約期內外傭翻譯及勞工法例諮詢", desc: "提供專業翻譯服務及法律諮詢支援" },
      { title: "7. 定期與僱主及外傭檢討", desc: "定期跟進服務品質及雙方滿意度" },
      { title: "8. 專人跟進及輔導服務", desc: "專業團隊提供持續關懷及指導" },
      { title: "9. 接機服務", desc: "專人機場接送，確保外傭安全到達" },
      { title: "10. 帶領外傭辦理香港身份證", desc: "專人陪同辦理香港身份證及相關手續" },
      { title: "11. 香港基本驗身", desc: "驗孕、大便、乙型肝炎、胸肺、梅毒及愛滋病檢驗" },
    ],
    process: [
      { title: "提交需求", desc: "詳細說明您的具體要求和期望" },
      { title: "篩選推薦", desc: "我們為您篩選符合條件的候選人" },
      { title: "面試確認", desc: "通過視頻面試確定最終人選" },
      { title: "辦理手續", desc: "完成所有法律程序和入境安排" },
    ],
    ctaTitle: "開始您的指定外傭之旅",
    ctaDesc: "讓我們協助您找到心儀的海外外傭",
  },
  "designated-local": {
    title: "指定本地外傭",
    subtitle: "指定本地外傭專業配對服務",
    heroDesc: "讓您自由選擇最合適的本地外傭人選",
    introTitle: "指定本地外傭服務",
    introText: "如果您已有心儀的本地外傭人選，或希望根據特定條件篩選，我們的指定本地外傭服務能夠為您提供精準的配對支援。",
    advantages: [
      { title: "精準篩選", desc: "根據您的具體要求篩選最合適的本地外傭" },
      { title: "預先了解", desc: "可事先查看外傭的工作履歷和推薦信" },
      { title: "面試機會", desc: "安排面對面或視頻面試，確保雙方滿意" },
      { title: "品質保證", desc: "所有指定外傭均經過背景調查和技能評估" },
    ],
    basicPlanItems: [
      { title: "1. 駐港領事館合約及核實", desc: "官方合約處理及身份核實服務，確保所有法律文件正確無誤" },
      { title: "2. 香港入境處之入境工作簽證", desc: "協助辦理所有入境手續及工作簽證申請" },
      { title: "3. 香港驗身", desc: "包括驗孕、大便、乙型肝炎、胸肺、梅毒及愛滋病檢驗" },
    ],
    process: [
      { title: "需求諮詢", desc: "了解您的具體要求和偏好" },
      { title: "篩選推薦", desc: "根據條件篩選合適的候選人" },
      { title: "面試確定", desc: "安排面試確定最終人選" },
      { title: "完成配對", desc: "辦理相關手續，開始工作" },
    ],
    ctaTitle: "開始您的指定本地外傭之旅",
    ctaDesc: "讓我們協助您找到最合適的本地外傭",
  },
  renewal: {
    title: "代辦續約外傭",
    subtitle: "專業外傭續約代辦服務",
    heroDesc: "為您處理外傭續約的一切手續",
    introTitle: "代辦續約外傭服務",
    introText: "我們提供專業的外傭續約代辦服務，協助您處理領事館合約認證、工作簽證申請及相關手續，讓您省時省力。",
    advantages: [
      { title: "省時便利", desc: "專業團隊代辦所有手續，節省您的寶貴時間" },
      { title: "專業可靠", desc: "熟悉各種續約程序，確保手續完整無誤" },
      { title: "一站式服務", desc: "從合約認證到簽證延期，全程代辦" },
      { title: "貼心跟進", desc: "全程跟進進度，及時更新辦理狀況" },
    ],
    basicPlanItems: [
      { title: "1. 駐港領事館合約認證", desc: "協助處理領事館的合約認證手續，確保續約合法有效" },
      { title: "2. 香港入境處之入境工作簽證", desc: "代辦入境處工作簽證延期申請，確保外傭合法工作" },
      { title: "3. 香港驗身", desc: "安排香港驗身檢查，包括驗孕、乙型肝炎、胸肺、梅毒及愛滋病病毒檢驗 (只限印傭)" },
      { title: "4. 菲律賓領事館OWWA費", desc: "代繳菲律賓領事館OWWA (海外勞工福利局) 費用 (只限菲傭)" },
    ],
    process: [
      { title: "諮詢評估", desc: "了解您的續約需求及外傭的具體情況" },
      { title: "準備文件", desc: "協助準備及整理所有續約所需文件" },
      { title: "辦理手續", desc: "代辦領事館認證、簽證延期等各項手續" },
      { title: "完成續約", desc: "確認所有手續完成，續約正式生效" },
    ],
    ctaTitle: "開始您的外傭續約服務",
    ctaDesc: "讓我們為您處理所有續約手續",
  },
  other: {
    title: "其他服務",
    subtitle: "其他代辦服務",
    heroDesc: "外傭保險、簽證申請、背景審查、駕照申請及專業培訓等一站式服務",
    introTitle: "其他代辦服務",
    introText: "除了基本的外傭配對服務外，我們還提供多種專業代辦服務，涵蓋四大類別的專業服務。",
    advantages: [
      { title: "保險及財務服務", desc: "保障僱主與外傭的權益，確保財務安全" },
      { title: "簽證及證照服務", desc: "處理各類證照申請，擴展外傭服務範圍" },
      { title: "專業培訓服務", desc: "提升外傭專業技能，提供更優質服務" },
      { title: "交通安排服務", desc: "協助處理外傭交通及旅行相關事務" },
    ],
    basicPlanItems: [
      { title: "1. 代辦外傭保險", desc: "協助為您的外傭辦理各類保險，保障僱主及外傭的權益" },
      { title: "2. 代辦外傭返回原居地的機票", desc: "安排外傭回鄉機票，處理相關航班預訂及文件" },
      { title: "3. 代辦中國簽證", desc: "協助外傭申請中國簽證，方便陪同僱主到內地" },
      { title: "4. 代辦其他國家簽證", desc: "處理各國簽證申請，滿足不同出行需求" },
      { title: "5. 外傭財務背景審查", desc: "進行信貸紀錄及信貸評級審查，確保財務誠信" },
      { title: "6. 代辦外傭報考香港駕駛執照/船牌", desc: "協助外傭考取香港駕駛執照或船牌，增加技能" },
      { title: "7. 安排參與照顧SEN技巧培訓", desc: "提供特殊教育需要兒童照顧技巧專業培訓" },
      { title: "8. 安排參與陪診及護理技巧培訓", desc: "提供陪診服務及基本護理技巧專業培訓" },
    ],
    ctaTitle: "需要其他專業服務？",
    ctaDesc: "聯絡我們了解更多服務詳情",
  },
};

function CategoryIcon({ type, className }: { type: string; className?: string }) {
  const cn = className || "w-8 h-8";
  switch (type) {
    case "users": return <Users className={cn} />;
    case "home": return <Home className={cn} />;
    case "search": return <Search className={cn} />;
    case "mappin": return <MapPin className={cn} />;
    case "filetext": return <FileText className={cn} />;
    case "briefcase": return <Briefcase className={cn} />;
    default: return <Users className={cn} />;
  }
}

export default function ServiceDetail() {
  const params = useParams();
  const serviceType = params.type || "overseas";
  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">找不到此服務</h1>
            <Link href="/services" className="text-primary-600 hover:underline">
              返回服務內容
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-500">
              <Link href="/" className="flex items-center hover:text-primary-600 transition-colors">
                <Home className="w-4 h-4 mr-1" />
                首頁
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link href="/services" className="hover:text-primary-600 transition-colors">
                服務內容
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-900 font-medium">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-primary-100 mb-2">{service.subtitle}</p>
            <p className="text-primary-200">{service.heroDesc}</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.introTitle}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{service.introText}</p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">服務類別</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {serviceCategories.map((cat) => {
                const isActive = cat.key === serviceType;
                return (
                  <Link
                    key={cat.key}
                    href={cat.href}
                    className={`group relative block rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg ${
                      isActive
                        ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg"
                        : "bg-white hover:bg-gray-100 text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors ${
                      isActive ? "bg-white/20" : "bg-primary-50 group-hover:bg-primary-100"
                    }`}>
                      <CategoryIcon
                        type={cat.icon}
                        className={`w-8 h-8 transition-colors ${isActive ? "text-white" : "text-primary-600"}`}
                      />
                    </div>
                    <h3 className={`text-sm font-semibold transition-colors ${
                      isActive ? "text-white" : "text-gray-900 group-hover:text-primary-600"
                    }`}>
                      {cat.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advantages (if available) */}
        {service.advantages && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                {serviceType === "local" ? "為什麼選擇本地外傭？" :
                 serviceType === "renewal" ? "續約代辦優勢" :
                 serviceType === "other" ? "服務分類" :
                 "指定服務優勢"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {service.advantages.map((adv, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{adv.title}</h3>
                    <p className="text-gray-600 text-sm">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Basic Service Plan */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">基本服務計劃包括</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.basicPlanItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Service Plan (for overseas) */}
        {service.premiumItems && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-gray-900">星級服務計劃</h2>
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-center text-gray-500 mb-8">基本服務計劃內容1-8 + 以下增值服務</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {service.premiumItems.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <HeartHandshake className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Premium Highlight */}
                {service.premiumHighlight && (
                  <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Star className="w-8 h-8 fill-current text-yellow-400" />
                      <h3 className="text-2xl font-bold">星級服務亮點</h3>
                      <Star className="w-8 h-8 fill-current text-yellow-400" />
                    </div>
                    <p className="text-xl text-primary-100 mb-6">{service.premiumHighlight}</p>
                    <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">100% 滿意保證</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Process (for designated, renewal pages) */}
        {service.process && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                {serviceType === "renewal" ? "續約流程" : "指定流程"}
              </h2>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.ctaTitle}</h2>
              <p className="text-xl text-gray-600 mb-8">{service.ctaDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  立即咨詢
                </Link>
                <Link
                  href="/search"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-primary-600 font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl border-2 border-primary-600"
                >
                  <Users className="w-5 h-5 mr-2" />
                  搜尋外傭
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
