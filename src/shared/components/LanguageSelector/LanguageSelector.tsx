import { useTranslation } from 'react-i18next';
import { styles } from './styles.language';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div style={styles.container}>
            <span 
                onClick={() => handleLanguageChange('es')}
                style={i18n.language === 'es' ? styles.activeLanguage : styles.language}
            >
                ES
            </span>
            <span style={styles.separator}>|</span>
            <span 
                onClick={() => handleLanguageChange('en')}
                style={i18n.language === 'en' ? styles.activeLanguage : styles.language}
            >
                EN
            </span>
            <span style={styles.separator}>|</span>
            <span 
                onClick={() => handleLanguageChange('ca')}
                style={i18n.language === 'ca' ? styles.activeLanguage : styles.language}
            >
                CA
            </span>
        </div>
    );
};
