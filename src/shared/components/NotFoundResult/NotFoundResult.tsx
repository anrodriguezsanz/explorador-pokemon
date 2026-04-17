import { Result } from "antd";
import { useTranslation } from "react-i18next";
import { GoBackButton } from "../GoBackButton/GoBackButton";
import sharedCons from "../../constants/shared.constants";

interface NotFoundResultProps {
    onGoBack?: () => void;
}

export const NotFoundResult = ({ onGoBack }: NotFoundResultProps = {}) => {
    const { t } = useTranslation();
    
    return (
        <Result
            status={sharedCons.NOT_FOUND_STATUS}
            title={t('list.notFound')}
            subTitle={t('list.notFoundSubtitle')}
            extra={
                <GoBackButton onGoBack={onGoBack} />
            }
        />
    );
};