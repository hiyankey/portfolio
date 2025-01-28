export function Status() {
  return (
    <div className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
      <span
        className="relative inline-flex h-3 w-3 rounded-full bg-teal-500"/>
    </div>
  );
}
