import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface MapComponentProps {
  center?: {
    lat: number;
    lng: number;
  };
}

function MapComponent({ center = { lat: 37.5665, lng: 126.9780 } }: MapComponentProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">🗺️ 카카오맵 테스트</h3>
      
      <Map
        center={center}
        style={{ width: '100%', height: '400px', borderRadius: '8px' }}
        level={3}
      >
        {/* 기본 마커 (서울시청) */}
        <MapMarker position={center} />
      </Map>
      
      <p className="text-sm text-gray-600 mt-2">
        📍 현재 위치: 서울시청
      </p>
    </div>
  );
}

export default MapComponent;