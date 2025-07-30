import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const ProjectPaymentsList = ({ title, proposals, list }) => {
  return (
    <Box
      sx={{
        textAlign: "left",
        borderRadius: 3,
        p: 2,
        border: "1px solid #E0E0E0",
        ml: 2,
        mb: 2,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "space-between",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        {title}
        {proposals && (
          <Box
            component="img"
            src="/icons/Dropdown.svg"
            alt="icon"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-center",
            }}
          />
        )}
      </Typography>
      <List>
        {list?.map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  py: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {proposals && (
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Box
                        component="img"
                        src={item?.icon}
                        alt="Logo"
                        sx={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item?.name}
                    secondary={item?.client}
                    fontSize={14}
                    fontWeight={400}
                    sx={{ ml: 1 }}
                  />
                </Box>

                {!proposals && (
                  <Box sx={{ minWidth: "80px", textAlign: "right" }}>
                    <Typography fontSize={14} fontWeight={400} color="#D92D20">
                      {item?.amount}
                    </Typography>
                  </Box>
                )}
              </Box>
            </ListItem>

            <Divider component="li" />
          </div>
        ))}
      </List>
      <Typography
        sx={{
          color: "#0B6166",
          fontWeight: 600,
          py: 2,
          textAlign: "right",
          cursor: "pointer",
        }}
      >
        Show more
      </Typography>
    </Box>
  );
};
