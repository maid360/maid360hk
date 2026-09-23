import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Search as SearchIcon, Globe, Star, Heart } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const maids = [
    {
      id: 1,
      name: "Maria Santos",
      nationality: "菲律賓",
      age: 32,
      experience: 8,
      languages: ["英文", "粵語"],
      specialties: ["照顧長者", "烹飪", "清潔"],
      rating: 4.8,
      reviews: 24,
      image: "👩‍🦱",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      nationality: "印尼",
      age: 28,
      experience: 5,
      languages: ["英文", "粵語"],
      specialties: ["照顧小孩", "清潔", "洗衣"],
      rating: 4.6,
      reviews: 18,
      image: "👩‍🦱",
    },
    {
      id: 3,
      name: "Noi Somphet",
      nationality: "泰國",
      age: 35,
      experience: 10,
      languages: ["英文"],
      specialties: ["烹飪", "照顧長者", "家務管理"],
      rating: 4.9,
      reviews: 32,
      image: "👩‍🦱",
    },
    {
      id: 4,
      name: "Fatima Begum",
      nationality: "孟加拉",
      age: 30,
      experience: 6,
      languages: ["英文", "粵語"],
      specialties: ["清潔", "洗衣", "烹飪"],
      rating: 4.5,
      reviews: 15,
      image: "👩‍🦱",
    },
    {
      id: 5,
      name: "Rosa Reyes",
      nationality: "菲律賓",
      age: 29,
      experience: 7,
      languages: ["英文", "粵語", "普通話"],
      specialties: ["照顧小孩", "烹飪", "清潔"],
      rating: 4.7,
      reviews: 21,
      image: "👩‍🦱",
    },
    {
      id: 6,
      name: "Dewi Lestari",
      nationality: "印尼",
      age: 26,
      experience: 3,
      languages: ["英文"],
      specialties: ["清潔", "洗衣"],
      rating: 4.4,
      reviews: 12,
      image: "👩‍🦱",
    },
  ];

  const filteredMaids = maids.filter((maid) => {
    const matchesSearch =
      maid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      maid.specialties.some((s) =>
        s.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesNationality =
      selectedNationality === "all" || maid.nationality === selectedNationality;

    const matchesExperience =
      selectedExperience === "all" ||
      (selectedExperience === "junior" && maid.experience < 5) ||
      (selectedExperience === "mid" && maid.experience >= 5 && maid.experience < 10) ||
      (selectedExperience === "senior" && maid.experience >= 10);

    const matchesLanguage =
      selectedLanguage === "all" ||
      maid.languages.includes(selectedLanguage);

    return (
      matchesSearch &&
      matchesNationality &&
      matchesExperience &&
      matchesLanguage
    );
  });

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
                <li className="text-gray-900 font-medium">搜尋外傭</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">搜尋外傭</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              找到最適合您的外傭
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="搜尋外傭名字或專長..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    國籍
                  </label>
                  <select
                    value={selectedNationality}
                    onChange={(e) => setSelectedNationality(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="all">全部國籍</option>
                    <option value="菲律賓">菲律賓</option>
                    <option value="印尼">印尼</option>
                    <option value="泰國">泰國</option>
                    <option value="孟加拉">孟加拉</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    工作經驗
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="all">全部經驗</option>
                    <option value="junior">初級 (0-5年)</option>
                    <option value="mid">中級 (5-10年)</option>
                    <option value="senior">資深 (10年以上)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    語言
                  </label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="all">全部語言</option>
                    <option value="英文">英文</option>
                    <option value="粵語">粵語</option>
                    <option value="普通話">普通話</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    &nbsp;
                  </label>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedNationality("all");
                      setSelectedExperience("all");
                      setSelectedLanguage("all");
                    }}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    重置篩選
                  </button>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                找到 <span className="font-semibold text-gray-900">{filteredMaids.length}</span> 位外傭
              </div>
            </div>
          </div>
        </section>

        {/* Maid Cards */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {filteredMaids.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMaids.map((maid) => (
                    <div
                      key={maid.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-5xl">{maid.image}</div>
                          <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{maid.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                          <span className="font-semibold">{maid.rating}</span>
                          <span className="text-primary-100">({maid.reviews} 評價)</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Globe className="w-4 h-4 text-primary-600" />
                            <span>{maid.nationality}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span className="text-sm">年齡: {maid.age} 歲</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span className="text-sm">工作經驗: {maid.experience} 年</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-900 mb-2">語言能力</p>
                          <div className="flex flex-wrap gap-2">
                            {maid.languages.map((lang, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm font-semibold text-gray-900 mb-2">專長</p>
                          <div className="flex flex-wrap gap-2">
                            {maid.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                          查看詳情
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    沒有找到符合條件的外傭
                  </h3>
                  <p className="text-gray-600">請嘗試調整搜尋條件或篩選選項</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              沒有找到合適的外傭？
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              我們的專業團隊可以根據您的具體需求推薦最合適的外傭
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
