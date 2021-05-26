import useLocalStorage from './UseLocalStorage';

const useStoredSettings = () => {
	const [theme, setTheme] = useLocalStorage('easynote-theme', 'light');
	const [font, setFont] = useLocalStorage('easynote-font', 'roboto');

	const changeTheme = (e) => setTheme(e.target.value);

	const changeFont = (e) => setFont(e.target.value);

	return [theme, changeTheme, font, changeFont];
}

export default useStoredSettings;