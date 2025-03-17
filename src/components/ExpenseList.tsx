import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "date", headerName: "날짜", width: 130 },
  { field: "category", headerName: "카테고리", width: 130 },
  {
    field: "amount",
    headerName: "금액",
    width: 130,
    valueFormatter: (params) => {
      return new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(params.value);
    },
  },
  { field: "description", headerName: "설명", width: 200 },
];

export default function ExpenseList() {
  // 실제 데이터는 API에서 가져와야 합니다
  const rows = [
    {
      id: 1,
      date: "2024-03-15",
      category: "식비",
      amount: 15000,
      description: "점심식사",
    },
    // ... 더 많은 데이터
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        지출 내역
      </Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </Box>
  );
}
