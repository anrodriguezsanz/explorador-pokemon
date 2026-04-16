import { styles } from "./styles.navbar";
import { Typography } from "antd";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { currentPageAtom } from "../../utils/pokemon.store";
import { usePokemonList } from "../../../features/modules/pokemon-list/hooks/usePokemonList";

const { Title } = Typography;

export const Navbar = () => {
    const navigate = useNavigate();
    const [, setCurrentPage] = useAtom(currentPageAtom);
    const { resetFilters } = usePokemonList();

    // Reset all filters and navigate to home
    const handleGoHome = () => {
        navigate('/');
        setCurrentPage(1);
        resetFilters();
    };

    return (
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <Title level={1} style={styles.title} onClick={handleGoHome}>
            Poképedia
          </Title>
        </div>  
      </nav>
    );
};