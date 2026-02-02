import WindowsControls from "@/components/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";

function Chrome() {
  return (
    <div className="grid bg-red-800 windows">
      <div>
        top part <WindowsControls window="chrome" />
      </div>

      <div>side bar with all the icons</div>

      <div>
        <div>page.tsx</div>
        <div>
          <div>
            app {">"} {"react logo"} page.tsx {">"} {"box logo"} Home
          </div>
          <div>
            export default function Home()
            {`{
                return <h1>Welcome to my portfolio</h1>
            }`}
          </div>
        </div>
      </div>

      <div>
        <div>problems output debug console terminal ports + ... | {"[]"} x</div>
        <div>
          <div>
            <p>file path</p>
            <p>$npm run tech-stack</p>
            <p>{">"}tech-stack@0.1.0 dev</p>
            <div>categories technologies</div>
          </div>
          <div>
            border left classname
            <div>bash{/* make it look higlighted */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChromeWindow = WindowWrapper(Chrome, "chrome");

export default ChromeWindow;
