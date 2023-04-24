import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BasicAlerts({ message, severity, open, setOpen }) {
  setTimeout(() => {
    setOpen(false);
  }, 5000);

  return (
    <Stack
      sx={{
        width: "30rem",
        position: "absolute",
        top: "60rem",
        bottom: "0"
      }}
      spacing={2}
    >
      <Alert
        variant="filled"
        severity={severity}
        sx={{ fontSize: "1.3rem", textAlign: "center" }}
      >
        {message}
      </Alert>
    </Stack>
  );
}
