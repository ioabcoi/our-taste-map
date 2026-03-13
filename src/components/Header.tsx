function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 & 타이틀 */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">🗺️</span>
            <div>
              <h1 className="text-xl font-bold">Our-Taste-Map</h1>
              <p className="text-xs opacity-80">맛멋집</p>
            </div>
          </div>

          {/* 메뉴 버튼 (나중에 추가) */}
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;