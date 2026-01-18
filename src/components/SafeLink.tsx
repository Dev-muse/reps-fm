import { Platform, Pressable, Text } from "react-native";
import { Link as ExpoLink, useRouter } from "expo-router";
 
type SafeLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

export const SafeLink = ({ href, children, className, ...rest }: SafeLinkProps) => {
  const router = useRouter();

  if (Platform.OS === "android") {
    // split className into bg/flex and text color automatically
    const containerClasses = className?.replace(/text-\S+/g, "") ?? "";
    const textClassesMatch = className?.match(/text-\S+/g);
    const textClasses = textClassesMatch?.join(" ") ?? "";

    return (
      <Pressable onPress={() => router.push(href)} className={containerClasses} {...rest}>
        <Text className={textClasses}>{children}</Text>
      </Pressable>
    );
  }

  return <ExpoLink href={href} className={className} {...rest}>{children}</ExpoLink>;
};
