import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Search2() {
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
                <li className="text-gray-900 font-medium">搜尋外傭 (AgentPro)</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-12">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">搜尋外傭</h1>
            <p className="text-lg text-primary-100">
              使用 AgentPro 系統搜尋合適的外傭人選
            </p>
          </div>
        </section>

        {/* Iframe Section */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <iframe
                  src="https://maid360.agentpro.com.hk/tc/maid-search"
                  title="AgentPro 外傭搜尋系統"
                  className="w-full border-0"
                  style={{ minHeight: "800px", height: "calc(100vh - 300px)" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
