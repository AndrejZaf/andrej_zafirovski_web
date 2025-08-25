export const Separator = () => {
  return (
    <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw]">
      <div className="relative flex h-8 w-full border-x border-edge before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-fg:var(--color-black)]/5"></div>
    </div>
  );
};
