import { useEffect } from 'react'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import Header from './components/Header'
import FirebaseTest from './components/FirebaseTest'
import './App.css'

function App() {
  // Firebase 연결 테스트
  useEffect(() => {
    const testFirebase = async () => {
      try {
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
      <Header />

      <main className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Firebase 데이터 테스트 */}
          <div className="mb-6">
            <FirebaseTest />
          </div>

          {/* 개발 진행 상황 */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold mb-4">✅ 완료된 작업</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>React + TypeScript 환경 구축</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>TailwindCSS 디자인 시스템</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Vercel 배포</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Firebase 연동</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Firestore 데이터 읽기/쓰기</span>
              </div>
            </div>
          </div>

          {/* 다음 할 일 */}
          <div className="card">
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
                <span>장소 추가 폼 만들기</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App