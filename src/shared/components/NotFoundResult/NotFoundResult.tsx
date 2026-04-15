import { Result } from "antd";
import { GoBackButton } from "../GoBackButton/GoBackButton";
import sharedCons from "../../constants/shared.constants";

interface NotFoundResultProps {
    onGoBack?: () => void;
}

export const NotFoundResult = ({ onGoBack }: NotFoundResultProps = {}) => {
    return (
        <Result
            status={sharedCons.NOT_FOUND_STATUS}
            title={sharedCons.NOT_FOUND_TITLE}
            subTitle={sharedCons.NOT_FOUND_SUBTITLE}
            extra={
                <GoBackButton onGoBack={onGoBack} />
            }
        />
    );
};