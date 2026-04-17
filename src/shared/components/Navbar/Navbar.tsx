import { styles } from "./styles.navbar";
import { Typography } from "antd";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { currentPageAtom } from "../../utils/pokemon.store";
import { usePokemonList } from "../../../features/modules/pokemon-list/hooks/usePokemonList";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import sharedCons from "../../constants/shared.constants";

const { Title } = Typography;

export const Navbar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [, setCurrentPage] = useAtom(currentPageAtom);
    const { resetFilters } = usePokemonList();

    // Reset all filters and navigate to home
    const handleGoHome = () => {
        navigate(sharedCons.HOME_PATH); 
        setCurrentPage(1);
        resetFilters();
    };

    return (
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <div style={styles.leftSpacer}></div>
          <Title level={1} style={styles.title} onClick={handleGoHome}>
            {t('navbar.title')}
          </Title>
          <div style={styles.rightContainer}>
            <LanguageSelector />
          </div>
        </div>  
      </nav>
    );
};