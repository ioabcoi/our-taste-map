import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function FirebaseTest() {
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 테스트 장소 추가
  const addTestPlace = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'places'), {
        name: '테스트 맛집',
        category: 'restaurant',
        rating: 4.5,
        shortReview: 'Firebase 연결 테스트!',
        createdAt: new Date(),
      });
      console.log('✅ 문서 추가 성공! ID:', docRef.id);
      alert('장소 추가 성공! 🎉');
      fetchPlaces(); // 목록 새로고침
    } catch (error) {
      console.error('❌ 추가 실패:', error);
      alert('추가 실패 😢');
    } finally {
      setLoading(false);
    }
  };

  // 장소 목록 불러오기
  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'places'));
      const placesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPlaces(placesList);
      console.log('✅ 장소 목록:', placesList);
    } catch (error) {
      console.error('❌ 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">🔥 Firebase 데이터 테스트</h3>
      
      {/* 버튼들 */}
      <div className="space-y-3 mb-6">
        <button 
          className="btn-primary w-full"
          onClick={addTestPlace}
          disabled={loading}
        >
          {loading ? '처리 중...' : '테스트 장소 추가'}
        </button>
        
        <button 
          className="btn-secondary w-full"
          onClick={fetchPlaces}
          disabled={loading}
        >
          장소 목록 불러오기
        </button>
      </div>

      {/* 장소 목록 */}
      {places.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">저장된 장소 ({places.length}개):</h4>
          {places.map((place) => (
            <div 
              key={place.id} 
              className="bg-gray-100 p-3 rounded-lg text-sm"
            >
              <div className="font-medium">{place.name}</div>
              <div className="text-gray-600">⭐ {place.rating}</div>
              <div className="text-gray-500 text-xs">{place.shortReview}</div>
            </div>
          ))}
        </div>
      )}

      {places.length === 0 && (
        <p className="text-gray-500 text-sm text-center">
          아직 저장된 장소가 없어요
        </p>
      )}
    </div>
  );
}

export default FirebaseTest;