export function Status() {
  return (
    <div className="relative flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
      <span
        className="relative inline-flex h-4 w-4 rounded-full bg-orange-500"/>
    </div>
  );
}
