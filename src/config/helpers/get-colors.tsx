import { getColors } from "react-native-image-colors";

export const getColorsFromImage = async (image: string) => {
  const fallbackColors = "#228B22";

  try {
    const colors = await getColors(image, {
      fallback: fallbackColors,
      cache: true,
      key: image,
    });

    switch (colors.platform) {
      case "android":
        return colors.dominant ?? fallbackColors;
      case "ios":
        return colors.background ?? fallbackColors;
      default:
        return fallbackColors;
    }
  } catch (error) {
    return fallbackColors;
  }
};
