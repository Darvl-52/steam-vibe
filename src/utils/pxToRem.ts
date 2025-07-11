export const pxToRem = (pixels: number) => {
  const htmlElementFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize
  );

  return pixels / htmlElementFontSize;
}