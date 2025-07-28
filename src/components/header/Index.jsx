import { Badge, Box, Button, ButtonGroup } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
export const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Box>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            color: "#344054",
            fontWeight: 600,
            fontSize: 14,
            textTransform: "none",
            border: "1px solid #E0E0E0",
            borderRadius: 2,
          }}
        >
          <Button
            sx={{
              color: "#344054",
              fontWeight: 600,
              fontSize: 14,
              textTransform: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 2,
            }}
          >
            <span
              style={{
                height: 5,
                width: 5,
                backgroundColor: "#17B26A",
                borderRadius: 100,
                marginRight: 5,
              }}
            ></span>{" "}
            This month
          </Button>
          <Button
            sx={{
              color: "#344054",
              fontWeight: 600,
              fontSize: 14,
              textTransform: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 2,
            }}
          >
            Last month
          </Button>
          <Button
            startIcon={<AddIcon />}
            sx={{
              color: "#344054",
              fontWeight: 600,
              fontSize: 14,
              textTransform: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 2,
            }}
          >
            Custom
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={
            <img
              src="/icons/calendar.svg"
              alt="Calendar Icon"
              style={{ width: 16, height: 16 }}
            />
          }
          sx={{
            color: "#344054",
            fontWeight: 600,
            fontSize: 14,
            textTransform: "none",
            border: "1px solid #E0E0E0",
            borderRadius: 2,
          }}
        >
          Jan 6, 2024 – Jan 13, 2024
        </Button>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            color: "#344054",
            fontWeight: 600,
            fontSize: 14,
            textTransform: "none",
            border: "1px solid #E0E0E0",
            borderRadius: 2,
          }}
        >
          Filters
        </Button>
      </Box>
    </Box>
  );
};
