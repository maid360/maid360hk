import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, CheckCircle, Clock, FileText, ExternalLink, Download, Calendar, Users, Star, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function EmployerGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const applicationSteps = [
    {
      step: 1,
      title: "挑選外傭",
      description: "瀏覽外傭履歷，選擇合適人選",
      timeline: "第0-1週",
    },
    {
      step: 2,
      title: "簽署合約",
      description: "與外傭簽署僱傭合約",
      timeline: "第1-2週",
    },
    {
      step: 3,
      title: "辦理簽證",
      description: "準備簽證文件，申請工作簽證",
      timeline: "第2-8週",
    },
    {
      step: 4,
      title: "體檢安排",
      description: "外傭進行身體檢查",
      timeline: "第8-10週",
    },
    {
      step: 5,
      title: "機票安排",
      description: "購買機票，安排出發",
      timeline: "第10-11週",
    },
    {
      step: 6,
      title: "入屋上崗",
      description: "外傭抵港並開始工作",
      timeline: "第11-12週",
    },
  ];

  const requirements = [
    "外傭與僱主必須簽訂指明的標準僱傭合約(ID407)",
    "外傭只可為僱主執行標準僱傭合約內所列的家務",
    "外傭在香港特區逗留期間不得為他人從事僱傭工作",
    "僱主須承諾給予外傭的薪金不少於香港特區政府公布的規定最低工資",
    "外傭必須在標準僱傭合約內列明的僱主住所工作和居住",
    "僱主須為外傭購買有效的僱員補償保險",
    "僱主須為外傭購買有效的醫療保險",
    "僱主須確保外傭每月至少有一天假期",
  ];

  const documents = [
    {
      category: "僱主文件",
      items: [
        "身份證副本",
        "住址證明（水電費單據）",
        "工作證明信",
        "銀行戶口證明",
      ],
    },
    {
      category: "外傭文件",
      items: [
        "護照副本",
        "出生證明書副本",
        "無犯罪紀錄證明書",
        "健康檢查報告",
        "學歷證明",
        "工作經驗證明",
      ],
    },
  ];

  const faqs = [
    {
      question: "外傭的最低工資是多少？",
      answer: "根據香港特區政府規定，外傭的最低工資每年調整。目前最低工資為每月HK$5,100（包括膳食津貼）。具體金額請查詢政府最新公告。",
    },
    {
      question: "外傭可以做哪些工作？",
      answer: "外傭可以執行標準僱傭合約內所列的家務工作，包括清潔、洗衣、煮飯、照顧家庭成員等。不可從事其他工作或為他人工作。",
    },
    {
      question: "需要購買保險嗎？",
      answer: "是的，僱主必須為外傭購買僱員補償保險。配對360可以協助您安排保險。",
    },
    {
      question: "外傭可以帶家人來香港嗎？",
      answer: "外傭的工作簽證不允許帶同家庭成員。外傭必須在僱主住所工作和居住。",
    },
    {
      question: "外傭的假期如何安排？",
      answer: "外傭享有法定假日、年假和其他假期，具體安排須在僱傭合約中列明。",
    },
  ];

  const responsibilities = [
    {
      title: "聘用前",
      items: [
        "確認外傭的身份和資格",
        "簽訂標準僱傭合約",
        "購買僱員補償保險和醫療保險",
        "安排住宿和工作環境",
      ],
    },
    {
      title: "聘用期間",
      items: [
        "按時支付薪金",
        "提供安全的工作環境",
        "尊重外傭的基本人權",
        "保持良好的溝通",
      ],
    },
    {
      title: "合約終止",
      items: [
        "按合約規定支付遣散費",
        "協助外傭辦理離港手續",
        "提供工作證明文件",
        "退回外傭的身份證件",
      ],
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
                <li className="text-gray-900 font-medium">僱主須知</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">僱主須知</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-4">
              全面的僱主指南
            </p>
            <p className="text-lg text-primary-100">
              了解聘請外傭的完整流程、條件及注意事項
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section id="申請流程" className="py-20 bg-white scroll-mt-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  外傭申請流程
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
                  <div className="bg-primary-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      外傭入屋需時
                    </h3>
                    <p className="text-gray-700 mb-2">菲傭：2-3個月</p>
                    <p className="text-gray-700">印傭/泰傭：3-4個月</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      總流程時間
                    </h3>
                    <p className="text-gray-700 mb-2">菲傭：10-12週</p>
                    <p className="text-gray-700">印傭：10-14週</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {applicationSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="flex-shrink-0 bg-primary-100 text-primary-600 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap">
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section id="聘請條件" className="py-20 bg-gray-50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  聘請條件
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="space-y-4">
                  {requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents / 所需文件 */}
        <section id="所需文件" className="py-20 bg-white scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  所需文件
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-primary-100"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="w-6 h-6 text-primary-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {doc.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {doc.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="常見問題" className="py-20 bg-gray-50 scroll-mt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  常見問題
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === idx ? null : idx)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-primary-600 transition-transform flex-shrink-0 ${
                          expandedFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 有用資料 Section */}
        <section id="有用資料" className="py-20 bg-white scroll-mt-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-primary-600" />
                  有用資料
                  <Star className="w-8 h-8 text-primary-600" />
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-12">
                {/* 政府表格 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary-600" />
                    政府表格
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "ID407 標準僱傭合約 (中文版)", desc: "標準僱傭合約表格", code: "ID407-CN", url: "https://www.fdh.labour.gov.hk/res/pdf/2017_SEC_Eng.pdf" },
                      { title: "ID407E 終止僱傭合約通知書", desc: "合約終止通知表格", code: "ID407E", url: "https://www.immd.gov.hk/pdforms/id407e.pdf" },
                      { title: "ID407G 經修訂的住宿地址及家務安排", desc: "住宿地址及工作安排修訂表格", code: "ID407G", url: "https://www.immd.gov.hk/pdforms/id407g.pdf" },
                      { title: "ID988A 從外國受聘來港家庭傭工簽證申請表格", desc: "由外傭填寫", code: "ID988A", url: "https://www.immd.gov.hk/pdforms/id988a.pdf" },
                      { title: "ID988B 從外國聘用家庭傭工申請表格", desc: "由僱主填寫", code: "ID988B", url: "https://www.immd.gov.hk/pdforms/ID988B.pdf" },
                    ].map((form, idx) => (
                      <a
                        key={idx}
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer block"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-8 h-8 text-primary-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{form.title}</h4>
                          <p className="text-gray-600 text-sm mb-4">{form.desc}</p>
                          <div className="flex items-center justify-center gap-2 text-primary-600 text-sm font-medium">
                            <ExternalLink className="w-4 h-4" />
                            <span>查看詳情</span>
                          </div>
                          <div className="mt-2 text-xs text-gray-400 font-mono">{form.code}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 指南手冊 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary-600" />
                    指南手冊
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "僱用外籍家庭傭工實用指南 (English)", desc: "英文版僱主實用指南", url: "https://www.fdh.labour.gov.hk/res/pdf/FDHguideEnglish.pdf" },
                      { title: "僱用外籍家庭傭工實用指南 (中文)", desc: "中文版僱主實用指南", url: "https://www.fdh.labour.gov.hk/res/pdf/FDHguideChinese.pdf" },
                      { title: "僱用外籍家庭傭工實用指南 (印尼文)", desc: "印尼文版僱主實用指南", url: "https://www.fdh.labour.gov.hk/res/pdf/FDHguideIndonesian.pdf" },
                    ].map((guide, idx) => (
                      <a
                        key={idx}
                        href={guide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer block"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-primary-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h4>
                          <p className="text-gray-600 text-sm mb-4">{guide.desc}</p>
                          <div className="flex items-center justify-center gap-2 text-primary-600 text-sm font-medium">
                            <ExternalLink className="w-4 h-4" />
                            <span>查看指南</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 下載資源 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Download className="w-6 h-6 text-primary-600" />
                    下載資源
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "外傭工作時間表", desc: "一般家庭", url: "https://maid360.hk/documents/Working_Schedule-1.pdf" },
                      { title: "外傭工作時間表", desc: "照顧老人", url: "https://maid360.hk/documents/Working_Schedule-Nursing.pdf" },
                    ].map((dl, idx) => (
                      <a
                        key={idx}
                        href={dl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer block"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Download className="w-8 h-8 text-primary-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{dl.title}</h4>
                          <p className="text-gray-600 text-sm mb-4">{dl.desc}</p>
                          <div className="flex items-center justify-center gap-2 text-primary-600 text-sm font-medium">
                            <Download className="w-4 h-4" />
                            <span>下載檔案</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 參考資料 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary-600" />
                    參考資料
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "香港法定假日", desc: "2025年法定假日", url: "https://www.labour.gov.hk/tc/news/latest_holidays2025.htm" },
                      { title: "在港外籍家庭傭工申請中華民國簽證服務說明", desc: "台灣簽證申請說明", url: "https://maid360.hk/documents/information_11.pdf" },
                      { title: "勞工處", desc: "香港勞工處相關資訊", url: "https://www.labour.gov.hk/tc/index.htm" },
                    ].map((ref, idx) => (
                      <a
                        key={idx}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer block"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-8 h-8 text-primary-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{ref.title}</h4>
                          <p className="text-gray-600 text-sm mb-4">{ref.desc}</p>
                          <div className="flex items-center justify-center gap-2 text-primary-600 text-sm font-medium">
                            <ExternalLink className="w-4 h-4" />
                            <span>查看詳情</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* 重要提醒 */}
              <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">重要提醒</h3>
                    <p className="text-amber-700 text-sm">
                      以上資料僅供參考，實際申請程序及要求請以香港入境事務處最新公布為準。如有疑問，建議諮詢專業僱傭中心或相關政府部門。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備聘請外傭？
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              我們的專業團隊隨時準備協助您完成整個過程
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/85293914435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp 諮詢
              </a>
              <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  聯絡我們
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}