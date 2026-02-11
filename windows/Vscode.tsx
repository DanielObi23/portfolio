import WindowWrapper from "@/hoc/WindowsWrapper";
import {
  VscodeNavbar,
  VscodeSidebar,
  VscodeTerminal,
} from "@/components/desktop/vscodeComp";

function Vscode() {
  return (
    <div className="grid grid-cols-[3.75rem_repeat(11,minmax(0,1fr))] bg-secondary grid-rows-[2.5rem_repeat(11,minmax(0,1fr))] text-white rounded-md max-h-150 max-w-[calc(100vw-5rem)]">
      <VscodeNavbar />
      <VscodeSidebar />
      <VscodeTerminal />
    </div>
  );
}

const VscodeWindow = WindowWrapper(Vscode, "vscode");

export default VscodeWindow;
