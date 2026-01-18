import { Platform, Pressable, Text } from "react-native";
import { Link as ExpoLink, useRouter } from "expo-router";

export const SafeLink = ({ href, children, ...props }) => {
  if (Platform.OS === "android") {
    const router = useRouter();
    return (
      <Pressable onPress={() => router.push(href)} {...props}>
        <Text>{children}</Text>
      </Pressable>
    );
  }
  return <ExpoLink href={href} {...props}>{children}</ExpoLink>;
};
