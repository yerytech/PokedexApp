import Icon from "@expo/vector-icons/MaterialIcons";
interface Props {
  name?: keyof typeof Icon.glyphMap;
  size?: number;
  color?: string;
}
export const CustomIcon = ({ name = "add", size = 24, color }: Props) => {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
    />
  );
};
