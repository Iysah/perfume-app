import Toast from 'react-native-root-toast';
import { Colors } from '@/constants/Colors';
const capitalizeFirstLetter = (text: string) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

// Define an enum for toast types
export enum ToastType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    HELP = 'help',
}

// Update the showToast function to accept a toast type
export const showToast = (msg: string, type: ToastType) => {
    let backgroundColor;
    let borderColor;

    // Set background color based on toast type
    switch (type) {
        case ToastType.SUCCESS:
            backgroundColor = Colors.error.successColor;
            // borderColor = Colors.error.successBorder;
            // Define this color in your Colors constant
            break;
        case ToastType.WARNING:
            backgroundColor = Colors.error.warningColor; // Define this color in your Colors constant
            break;
        case ToastType.ERROR:
            backgroundColor = Colors.error.errorColor; // Define this color in your Colors constant
            break;
        case ToastType.HELP:
            backgroundColor = Colors.error.helpColor; // Define this color in your Colors constant
            break;
        default:
            backgroundColor = Colors.light.primaryColor; // Fallback color
    }

    Toast.show(capitalizeFirstLetter(msg), {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        shadow: true,
        shadowColor: 'rgba(0,0,0,0.3)',
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: backgroundColor,
        // borderColor: borderColor,
        opacity: 0.9,
        textColor: "#fff",
        containerStyle: {
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 20,
            top: 20,
            zIndex: 99999999999,
            shadowOpacity: 0.2,
        },
        textStyle: {
            fontSize: 12,
            fontFamily: 'Open-Regular'
        },
    });
}

// Example usage
showToast("Operation successful!", ToastType.SUCCESS);
showToast("This is a warning!", ToastType.WARNING);
showToast("An error occurred!", ToastType.ERROR);
showToast("Need help?", ToastType.HELP);