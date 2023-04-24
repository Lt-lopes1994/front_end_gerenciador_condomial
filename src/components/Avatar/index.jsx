import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

export default function LetterAvatars({ handleOpen }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[500], marginRight: "0.9rem" }}
        // onClick={() => handleOpen()}
      >
        BL
      </Avatar>
    </Stack>
  );
}
