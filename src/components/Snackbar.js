import Snackbar from 'react-native-snackbar';
import { themeGreen, secondryColor } from '../utils/config'

const showError = (data) => {
    Snackbar.show({
        text: data,
        duration: Snackbar.LENGTH_LONG,
        textColor: themeGreen,
        backgroundColor: 'tomato',

    })
}

const showSuccess = (data) => {
    Snackbar.show({
        text: data,
        duration: Snackbar.LENGTH_LONG,
        textColor: themeGreen,
        backgroundColor: 'green'

    })
}

export {
    showError,
    showSuccess
}