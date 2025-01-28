export function Status() {
  return (
    <div className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
      <span
        className="relative inline-flex h-3 w-3 rounded-full"
        style={{
          background: `radial-gradient(
            circle,
            #f65400 0%,
            #f65603 14.61%,
            #f65b0b 26.24%,
            #f76317 35.31%,
            #f76e26 42.26%,
            #f87a38 47.5%,
            #f9874d 51.47%,
            #f99663 54.58%,
            #faa67a 57.27%,
            #fbb591 59.97%,
            #fcc5a8 63.08%,
            #fdd3be 67.06%,
            #fde1d2 72.31%,
            #feedE4 79.27%,
            #fff7f3 88.35%,
            white 100%
          )`,
        }}
      />
    </div>
  );
}
