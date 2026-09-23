import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.contactNo ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("請填寫所有必填欄位");
      return;
    }
    toast.success("訊息已發送！我們會盡快回覆您。");
    setFormData({
      firstName: "",
      lastName: "",
      contactNo: "",
      email: "",
      message: "",
    });
  };

  const mainBranches = [
    {
      name: "尖沙咀總店",
      badge: "總店",
      addressEn: "Shop 2-377, CKE Shopping Mall, No.36-44 Nathan Road, Tsim Sha Tsui (MTR Exit H)",
      addressZh: "尖沙咀彌敦道36-44號CKE重慶站購物商場二樓2-377",
    },
    {
      name: "荃灣分店",
      addressEn: "Room 2301 B3-B4, 23/F, Nan Fung Centre, 264-298 Castle Peak Road, Tsuen Wan",
      addressZh: "荃灣青山公路264-298號南豐中心23樓2301 B3-B4室",
    },
    {
      name: "葵涌分店",
      addressEn: "Shop 71, G/F Kwai Chung Plaza, 7-11 Kwai Foo Road, Kwai Chung",
      addressZh: "葵涌葵富路7-11號葵涌廣場地下71號舖",
    },
    {
      name: "上環分店",
      addressEn: "Flat 2A, Uwa building, 18-19 Connaught Road West, Sheung Wan",
      addressZh: "上環干諾道西18-19號祐華大廈2A室",
    },
    {
      name: "油麻地分店",
      addressEn: "Shop C, No. 1 Temple Street, Yau Ma Tei",
      addressZh: "油麻地廟街1號C舖",
    },
  ];

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
                <li className="text-gray-900 font-medium">聯絡我們</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">聯絡我們</h1>
            <p className="text-xl text-primary-100 mb-6">
              配對360僱傭中心 - 專業外傭配對服務
            </p>
            <a
              href="https://wa.me/85293914435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp/致電 +852 9391-4435
            </a>
          </div>
        </section>

        {/* 聯絡方式 Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">聯絡方式</h2>
              <p className="text-gray-600">多種聯絡方式，方便您隨時與我們溝通</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <a
                href="tel:+85239871034"
                className="bg-gray-50 rounded-2xl py-10 px-6 text-center hover:shadow-md transition-shadow block"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">電話</h3>
                <p className="text-green-500 font-medium text-sm">+852 3987-1034</p>
              </a>

              <a
                href="https://wa.me/85293914435"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-2xl py-10 px-6 text-center hover:shadow-md transition-shadow block"
              >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-green-500 font-medium text-sm">+852 9391-4435</p>
              </a>

              <a
                href="mailto:info@maid360.hk"
                className="bg-gray-50 rounded-2xl py-10 px-6 text-center hover:shadow-md transition-shadow block"
              >
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">電郵</h3>
                <p className="text-red-400 font-medium text-sm">info@maid360.hk</p>
              </a>
            </div>

            {/* 關注我們 */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">關注我們</h3>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/maid360employment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/maid360_hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 服務地點 Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">服務地點</h2>
              <p className="text-gray-600">多個分店及聯絡點，為您提供就近服務</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">主要分店</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {mainBranches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          {branch.name}
                          {branch.badge && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              {branch.badge}
                            </span>
                          )}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {branch.addressEn}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {branch.addressZh}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">聯絡點</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">馬鞍山聯絡點</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 給我們發訊息 & 營業時間 Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  給我們發訊息
                </h2>
                <p className="text-gray-600 mb-8">
                  請填寫以下表格，我們會盡快回覆您
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          name="firstName"
                          placeholder="請輸入名字"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">First</p>
                      </div>
                      <div>
                        <Input
                          type="text"
                          name="lastName"
                          placeholder="請輸入姓氏"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        <p className="text-xs text-gray-500 mt-1">Last</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact No <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="contactNo"
                      placeholder="請輸入聯絡電話"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="請輸入電郵地址"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      placeholder="請輸入您的訊息"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* 營業時間 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">營業時間</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary-600" />
                      <h3 className="text-xl font-semibold text-gray-900">平日</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      星期一至五: 上午9時至下午6時
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary-600" />
                      <h3 className="text-xl font-semibold text-gray-900">週末</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      星期六: 上午9時至下午1時
                    </p>
                  </div>

                  <p className="text-sm text-gray-500">
                    * 具體營業時間可能因分店而異，請致電確認
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
