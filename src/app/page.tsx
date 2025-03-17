import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Container, Box, Typography, Paper } from "@mui/material";
import ExpenseList from "@/components/ExpenseList";
import AddExpenseForm from "@/components/AddExpenseForm";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4">
          가계부 서비스에 오신 것을 환영합니다! 로그인해주세요.
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        우리 가족 가계부
      </Typography>
      <Box display="grid" gridTemplateColumns={{ md: "1fr 1fr" }} gap={3}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <AddExpenseForm />
        </Paper>
        <Paper elevation={3} sx={{ p: 3 }}>
          <ExpenseList />
        </Paper>
      </Box>
    </Container>
  );
}
