import { Pagination, Stack } from "@mui/material";

interface IPagination{
  total_pages:number,
  currentPage:number,
  setCurrentPage:(page:number)=>void
}

export const PaginationList:React.FC<IPagination> = ({
  total_pages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={total_pages}
          page={currentPage}
          color="primary"
          size="large"
          onChange={(_, num) => setCurrentPage(num)}
        />
      </Stack>
    </div>
  );
};
