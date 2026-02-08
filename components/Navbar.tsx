import Center from "./navbarComp/Center";
import Left from "./navbarComp/Left";
import Right from "./navbarComp/Right";

export default function Navbar() {
  return (
    <nav className="h-13 w-full fixed bottom-0 left-0 backdrop-blur-3xl select-none bg-gray-950 flex justify-between items-center py-1.5 px-4 z-50">
      <Left />
      <Center />
      <Right />
    </nav>
  );
}
