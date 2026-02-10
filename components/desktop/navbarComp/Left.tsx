export default function Left() {
  return (
    <div className="flex gap-1">
      <img
        src="/icons/window-icons/cloudy-icon.svg"
        alt="cloudy icon"
        className="h-9"
      />

      <div className="text-xs">
        <p className="text-white">8°C</p>
        <p className="text-gray-400">Mostly cloudy</p>
      </div>
    </div>
  );
}
