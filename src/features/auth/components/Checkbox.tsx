import { Text } from "@/components/ui/Text";
import { images } from "@/constants/images";
import { Image, Linking, Pressable, View } from "react-native";

type Props = {
  checked: boolean;
  handleChecked: () => void;
};

const Checkbox = ({ handleChecked, checked }: Props) => {
  const handleNavigationToTerms = () =>
    Linking.openURL("https://linkedin.com/in/ajaybishtsde");

  const handleNavigationToPrivacy = () =>
    Linking.openURL("https://linkedin.com/in/ajaybishtsde");

  return (
    <Pressable onPress={handleChecked} className="flex-row ">
      {!checked ? (
        <View className="h-4 w-4 bg-slate-400 rounded-lg me-2"></View>
      ) : (
        <Image source={images.checkedBox} className="me-2 h-4 w-4" />
      )}
      <Text muted>
        I am 18+ agree to the 4RL{" "}
        <Text className="text-primary" onPress={handleNavigationToTerms}>
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text className="text-primary" onPress={handleNavigationToPrivacy}>
          Privacy Policy
        </Text>
      </Text>
    </Pressable>
  );
};

export default Checkbox;
