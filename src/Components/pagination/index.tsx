import { Pagination } from "@mui/material";
import PaginationProps from '../../types/paginationProps';

const Component = ({ total, onChangePageNumber, limit, offset }: PaginationProps) => {
	return (
		<Pagination
			color="primary"
			count={Math.ceil(total / limit)}
		  page={Math.ceil(offset / limit)+1}
			variant="outlined"
			onChange={(_: unknown, page: number) => {
				onChangePageNumber(limit, (page-1)*limit )}}
		/>
	);
};

export default Component;
