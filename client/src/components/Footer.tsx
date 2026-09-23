import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const certifications = [
    {
      title: "職業介紹所牌照",
      number: "81669",
      desc: "政府認可就業服務牌照",
      icon: "/images/icon1.png",
    },
    {
      title: "菲律賓駐香港領事館",
      number: "MWOHK-2024-269-018",
      desc: "菲律賓外傭僱傭服務認可",
      icon: "/images/icon2.png",
    },
    {
      title: "泰國駐香港領事館",
      number: "026/2026",
      desc: "泰國外傭僱傭服務認可",
      icon: "/images/icon3.png",
    },
    {
      title: "孟加拉駐香港領事館",
      number: "8807",
      desc: "孟加拉外傭僱傭服務認可",
      icon: "/images/icon4.png",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">maid360.hk</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              配對360僱傭中心專業提供外傭配對服務，我們深信「世上沒有最好的外傭，只有最MATCH的外傭」。
            </p>
            <p className="text-xs font-medium text-primary-400">
              MAID 360 EMPLOYMENT AGENCY LIMITED
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">快速連結</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">首頁</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">關於我們</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">服務內容</Link></li>
              <li><Link href="/employer-guide" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">僱主須知</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">服務內容</h4>
            <ul className="space-y-2">
              <li><Link href="/services#overseas" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">海外外傭</Link></li>
              <li><Link href="/services#local" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">本地外傭</Link></li>
              <li><Link href="/services#renewal" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">代辦續約外傭</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">星級服務</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">聯絡我們</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/85293914435?text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E5%A4%96%E5%82%AD%E6%9C%8D%E5%8B%99"
                className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                +852 9391-4435
              </a>
              <a
                href="mailto:info@maid360.hk"
                className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@maid360.hk
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>尖沙咀彌敦道36-44號CKE重慶站購物商場二樓2-377</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>星期一至五: 上午9時至下午6時</div>
                  <div>星期六: 上午9時至下午1時</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">關注我們</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/maid360employment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/maid360_hk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              關注我們的社交媒體，獲取最新資訊
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-gray-800 pt-12">
          <h3 className="text-lg font-bold mb-3 text-white text-center">
            專業認證及牌照
          </h3>
          <p className="text-center text-sm text-gray-400 mb-8">
            持有政府認可牌照及領事館認證，為您提供專業可靠的外傭配對服務
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h5 className="text-sm font-semibold text-white mb-2">
                  {cert.title}
                </h5>
                <p className="text-lg font-bold text-primary-400 mb-1">
                  {cert.number}
                </p>
                <p className="text-xs text-gray-400">{cert.desc}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mt-8 max-w-4xl mx-auto leading-relaxed">
            我們持有香港政府發出的職業介紹所牌照，並獲得菲律賓駐香港領事館及泰國駐香港領事館的僱傭服務認證，確保為您提供合法、專業、可靠的外傭配對服務。
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © 2025 maid360.hk
          </p>
          <p className="text-sm text-gray-400">
            配對360僱傭中心 | MAID 360 EMPLOYMENT AGENCY LIMITED
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            返回頂端
          </a>
        </div>
      </div>
    </footer>
  );
}
