import { styles } from "../../../features/modules/pokemon-list/styles/styles.list";
import { Typography } from "antd";

const { Title } = Typography;

export const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <Title level={2} style={styles.title}>
            POKÉPEDIA
          </Title>
        </div>
      </nav>
    );
};