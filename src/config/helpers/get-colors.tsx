import ImageColors from "react-native-image-colors";

export const getColorsFromImage = async (image: string) => {
  const fallbackColors = "grey";
  const images = "https://via.placeholder.com/300.png";

  try {
    const colors = await ImageColors.getColors(image, {
      fallback: fallbackColors,
      cache: true,
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
    throw new Error(`Problemas al obtener el color ${error}`);
    
    return fallbackColors;
  }
};
