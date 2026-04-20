import { Button } from "antd";
import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { useAtom } from "jotai";
import { sortAtom } from "../../../../../shared/utils/pokemon.store";
import { orderingStyles } from "./styles.ordering";

export const OrderingButton = () => {
    const [sortOrder, setSortOrder] = useAtom(sortAtom);

    const isActive = sortOrder !== null;

    // If no order, set to 'asc'. If 'asc', set to 'desc'. If 'desc', set to null.
    const toggleSorting = () => {
        setSortOrder((prev) => {
            if (prev === null) return 'asc';
            if (prev === 'asc') return 'desc';
            return null;
        });
    };

    return (
        <Button
            onClick={toggleSorting}
            style={isActive ? orderingStyles.buttonActive : orderingStyles.button}
        >
            {sortOrder === 'asc' && 'A-Z '}
            {sortOrder === 'desc' && 'Z-A'}
            {sortOrder === null && 'A-Z '}
            {sortOrder === 'desc' ? <SortDescendingOutlined /> : <SortAscendingOutlined />}
        </Button>
    );
};