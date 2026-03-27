import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>

            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
}

export default Home;