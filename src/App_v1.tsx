import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header 컴포넌트 */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          
          {/* 환영 메시지 */}
          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-2">
              환영합니다! 👋
            </h2>
            <p className="text-secondary">
              Our-Taste-Map v1.0 개발 시작!
            </p>
          </div>

          {/* 개발 진행 상황 */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold mb-4">✅ 개발 환경 세팅 완료</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>React + TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>TailwindCSS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>디자인 시스템 적용</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Header 컴포넌트</span>
              </div>
            </div>
          </div>

          {/* 다음 할 일 */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold mb-4">🎯 다음 단계</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">○</span>
                <span>Firebase 연동</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">○</span>
                <span>카카오맵 API 연동</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">○</span>
                <span>지도 뷰 구현</span>
              </div>
            </div>
          </div>

          {/* 버튼 & 카테고리 테스트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 버튼 테스트 */}
            <div className="card">
              <h3 className="font-semibold mb-3">버튼 스타일</h3>
              <div className="space-y-3">
                <button className="btn-primary w-full">
                  Primary 버튼
                </button>
                <button className="btn-secondary w-full">
                  Secondary 버튼
                </button>
              </div>
            </div>

            {/* 카테고리 색상 */}
            <div className="card">
              <h3 className="font-semibold mb-3">카테고리 컬러</h3>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-restaurant text-white rounded-lg text-center">
                  🍽️ 맛집
                </div>
                <div className="px-4 py-2 bg-cafe text-white rounded-lg text-center">
                  ☕ 카페
                </div>
                <div className="px-4 py-2 bg-spot text-white rounded-lg text-center">
                  ✨ 멋진 장소
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}

export default App