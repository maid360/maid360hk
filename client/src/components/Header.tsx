import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => location === path;

  const navItems = [
    { href: "/", label: "首頁" },
    {
      label: "關於我們",
      href: "/about",
      submenu: [
        { href: "/about#服務理念", label: "服務理念" },
        { href: "/about#品牌由來", label: "品牌由來" },
        { href: "/about#集團介紹", label: "集團介紹" },
      ],
    },
    {
      label: "服務內容",
      href: "/services",
      submenu: [
        { href: "/services/overseas", label: "海外外傭" },
        { href: "/services/local", label: "本地外傭" },
        { href: "/services/designated-overseas", label: "指定海外外傭" },
        { href: "/services/designated-local", label: "指定本地外傭" },
        { href: "/services/renewal", label: "代辦續約外傭" },
        { href: "/services/other", label: "其他服務" },
      ],
    },
    {
      label: "僱主須知",
      href: "/employer-guide",
      submenu: [
        { href: "/employer-guide#申請流程", label: "申請流程" },
        { href: "/employer-guide#聘請條件", label: "聘請條件" },
        { href: "/employer-guide#常見問題", label: "常見問題" },
        { href: "/employer-guide#有用資料", label: "有用資料" },
      ],
    },
    { href: "/resources", label: "外傭資訊" },
    {
      label: "搜尋外傭",
      href: "/search",
      submenu: [
        { href: "/search1", label: "搜尋外傭 1" },
        { href: "/search2", label: "搜尋外傭 2" },
      ],
    },
    { href: "/contact", label: "聯絡我們" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm">
          <a
            href="https://wa.me/85293914435?text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E5%A4%96%E5%82%AD%E6%9C%8D%E5%8B%99"
            className="flex items-center gap-2 hover:text-primary-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-4 h-4" />
            +852 9391-4435
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/images/logo_header.png"
              alt="MAID360 Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                        isActive(item.href)
                          ? "text-primary-600 bg-primary-50"
                          : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subitem) => (
                        subitem.href.includes('#') ? (
                          <a
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-gray-700"
                            onClick={(e) => {
                              e.preventDefault();
                              const [path, hash] = subitem.href.split('#');
                              if (location !== path) {
                                window.location.href = subitem.href;
                              } else {
                                const el = document.getElementById(hash);
                                if (el) {
                                  const headerOffset = 96;
                                  const elementPosition = el.getBoundingClientRect().top;
                                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                              }
                            }}
                          >
                            {subitem.label}
                          </a>
                        ) : (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-gray-700"
                          >
                            {subitem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive(item.href)
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary-600" />
            ) : (
              <Menu className="w-6 h-6 text-primary-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className={`w-full flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? "text-primary-600 bg-primary-50"
                          : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subitem) => (
                          subitem.href.includes('#') ? (
                            <a
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                const [path, hash] = subitem.href.split('#');
                                if (location !== path) {
                                  window.location.href = subitem.href;
                                } else {
                                  const el = document.getElementById(hash);
                                  if (el) {
                                    const headerOffset = 96;
                                    const elementPosition = el.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                  }
                                }
                              }}
                            >
                              {subitem.label}
                            </a>
                          ) : (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
