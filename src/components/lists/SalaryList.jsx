import {
  Box,
  Chip,
  Grid,
  IconButton,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  Visibility,
  Download,
  CheckOutlined,
  Description,
} from "@mui/icons-material";
import { SimpleButton } from "../button/Index";

const salaryStatements = [
  {
    month: "December 2024",
    posted: "Posted on December 31, 2024",
    amount: "$2,000.00",
  },
  { month: "January 2025", posted: "on January 31, 2025", amount: "$2,000.00" },
  {
    month: "February 2025",
    posted: "on February 28, 2025",
    amount: "$2,000.00",
  },
  { month: "March 2025", posted: "on March 31, 2025", amount: "$2,000.00" },
];

const SalaryStatementList = () => {
  return (
    <Paper
      sx={{ p: 3, mt: 2, borderRadius: 2, border: "1px solid #E0E0E0" }}
      elevation={0}
    >
      <Box display={"flex"} alignItems="center" gap={2}>
        <Description />
        <Typography variant="h6" fontWeight={600}>
          Salary Statements
        </Typography>
      </Box>
      {salaryStatements.map((item, index) => (
        <Paper
          key={index}
          variant="outlined"
          sx={{ p: 2, my: 1, borderRadius: 2 }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Box display={"flex"} alignItems="center" gap={2}>
              <SimpleButton
                icon={<img src="/icons/calendar.svg" alt="calendar" />}
              />
              <Grid>
                <Typography fontWeight={500}>{item.month}</Typography>
                <Typography variant="caption">{item.posted}</Typography>
              </Grid>
            </Box>
            <Box>
              <Grid display="flex" alignItems="center" gap={2}>
                <Grid>
                  <Typography fontWeight={600}>{item.amount}</Typography>
                  <Typography variant="caption" align="right">
                    Net Pay
                  </Typography>
                </Grid>
                <Box display="flex" justifyContent={"center"} gap={1}>
                  <Box
                    sx={{
                      bgcolor: "#ECFDF3",
                      color: "#067647",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 20,
                      px: 2,
                      fontSize: 12,
                      border: "1px solid #AAEFC6",
                      width: "fit-content",
                      height: 30,
                    }}
                  >
                    <CheckOutlined fontSize="small" />
                    <Typography variant="caption" color="#067647">
                      Paid
                    </Typography>
                  </Box>
                  <Tooltip title="View">
                    <IconButton size="small">
                      <SimpleButton
                        text={"View"}
                        icon={<Visibility fontSize="small" />}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Download">
                    <IconButton size="small">
                      <SimpleButton
                        text={"Download"}
                        icon={<Download fontSize="small" />}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      ))}
    </Paper>
  );
};

export default SalaryStatementList;
