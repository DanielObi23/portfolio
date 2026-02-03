import WindowWrapper from "@/hoc/WindowsWrapper";
import { vscodeTheme } from "@/constants/vscode";
import {
  VscodeNavbar,
  VscodeEditor,
  VscodeSidebar,
  VscodeTeminal,
} from "@/components/vscodeComp";

function Vscode() {
  return (
    <div
      className={`grid grid-cols-[3.75rem_repeat(11,minmax(0,1fr))]	${vscodeTheme["bg-ui"]} grid-rows-12 max-h-150 max-w-[calc(100vw-5rem)]`}
    >
      <VscodeNavbar />
      <VscodeSidebar />
      <VscodeEditor />
      <VscodeTeminal />
    </div>
  );
}

const VscodeWindow = WindowWrapper(Vscode, "vscode");

export default VscodeWindow;
