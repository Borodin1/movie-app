import { Pagination, Stack } from "@mui/material";

export const PaginationList = ({
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
