export default function Mobile() {
  return (
    <div className="flex flex-col justify-between h-dvh py-5 px-3">
      <div className="grid grid-cols-4 gap-4 w-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <img
            key={i}
            src="/icons/file-explorer-icons/folder-icon.svg"
            alt="icon"
            className="size-12"
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <a key={i} href="/files/resume.pdf" target="_blank" rel="noopener">
            <img
              src="/icons/file-explorer-icons/folder-icon.svg"
              alt="icon"
              className="size-12"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
