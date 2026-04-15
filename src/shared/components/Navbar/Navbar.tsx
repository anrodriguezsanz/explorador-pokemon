import { styles } from "./styles.navbar";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography; 

export const Navbar = () => {
    const navigate = useNavigate();
    return (
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <Title level={1} style={styles.title} onClick={() => navigate('/')}>
            Poképedia
          </Title>
        </div>
      </nav>
    );
};