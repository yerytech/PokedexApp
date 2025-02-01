import { useEffect, useState } from "react";
import { getColors, ImageColorsResult } from "react-native-image-colors";

export const getColorsFromImage = async (image: string) => {
  // const [colors, setColors] = useState<ImageColorsResult | null>(null);
  const fallbackColors = "#228B22";

  // useEffect(() => {
  //   getColors(image, {
  //     fallback: fallbackColors,
  //     cache: true,
  //     key: image,
  //   }).then((colors) => setColors(colors));
  // }, []);

  return fallbackColors;
};
