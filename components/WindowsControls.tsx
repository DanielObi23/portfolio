import useWindowStore from "@/store/useWIndows";

export default function WindowsControls({ window }: { window: string }) {
  const closeWindow = useWindowStore((state) => state.closeWindow);
  return (
    <div className="bg-red size-15" onClick={() => closeWindow(window)}>
      X
    </div>
  );
}
