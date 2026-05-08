import { useEffect } from 'react'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import Header from './components/Header'
import './App.css'

function App() {
  // Firebase 연결 테스트
  useEffect(() => {
    const testFirebase = async () => {
      try {
        // places 컬렉션 읽기 시도
        const placesRef = collection(db, 'places');
        const snapshot = await getDocs(placesRef);
        console.log('🔥 Firebase 연결 성공!');
        console.log('장소 개수:', snapshot.size);
      } catch (error) {
        console.error('❌ Firebase 연결 실패:', error);
      }
    };

    testFirebase();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header 컴포넌트 */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Firebase 연결 테스트 */}
          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-2">
              🔥 Firebase 연결 테스트
            </h2>
            <p className="text-secondary mb-4">
              개발자 도구 (F12) → Console 탭을 확인하세요!
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-mono">
                ✅ Firebase SDK 설치됨<br />
                ✅ Firestore 연결 시도 중...<br />
                → Console에서 결과 확인!
              </p>
            </div>
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
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Vercel 배포</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Firebase 연동</span>
              </div>
            </div>
          </div>

          {/* 다음 할 일 */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold mb-4">🎯 다음 단계</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">○</span>
                <span>카카오맵 API 연동</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">○</span>
                <span>지도 뷰 구현</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">○</span>
                <span>장소 추가 기능</span>
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