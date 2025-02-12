import { GLOBALSTYLES } from "@/styles/global-styles";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface CustomInputProps {
    label?: string;
    icon?: React.ReactNode;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
  }
  
  export const CustomInput: React.FC<CustomInputProps> = ({
    label,
    icon,
    placeholder,
    value,
    onChangeText,
    ...rest // Spread remaining TextInput props
  }) => {
    return (
      <View style={[{ marginBottom: 15 }]}>
        {label && (
          <Text style={[GLOBALSTYLES.label]}>
            {label}
          </Text>
        )}
        <View style={[styles.passwordContainer]}>
          <TextInput
            style={[styles.input]} // Allow overriding input style
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            {...rest} // Spread remaining props like value, onChangeText, etc.
          />
          {icon && icon} {/* Render icon if provided */}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    passwordContainer: {
        position: 'relative',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      input: {
        height: 50,
        textTransform: 'lowercase',
        width: '90%'
    
      },
    })