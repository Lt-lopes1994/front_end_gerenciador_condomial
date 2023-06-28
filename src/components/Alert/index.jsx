import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BasicAlerts({
  message,
  severity,
  open,
  setOpen,
  top,
  bottom,
  left,
  right
}) {
  setTimeout(() => {
    setOpen(false);
  }, 5000);

  return (
    <Stack
      sx={{
        width: "30rem",
        position: "absolute",
        top: { top },
        bottom: { bottom },
        left: { left },
        right: { right }
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
