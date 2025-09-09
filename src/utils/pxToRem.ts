/**
 * Converts pixel to rem
 * @param px - Pixels value to be converted
 * @retuns the converted rem value
 */
export const pxToRem = (pixels: number): string => {
  return `${pixels / 16}rem`
}
