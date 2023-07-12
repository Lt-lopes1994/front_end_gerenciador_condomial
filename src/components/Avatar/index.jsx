import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import jwtDecode from "jwt-decode";

export default function LetterAvatars({ handleOpen }) {
  const name = jwtDecode(localStorage.getItem("token")).name.split(" ");
  let letterAvatar = '';

  if (name.length === 1) {
    letterAvatar = name[0].charAt(0);
  }

  if (name.length === 2) {
    const firstName = name[0];
    const lastName = name[1];

    letterAvatar = firstName.charAt(0) + lastName.charAt(0);
  }

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepPurple["500"], marginRight: "0.9rem" }}
      // onClick={() => handleOpen()}
      >
        {letterAvatar}
      </Avatar>
    </Stack>
  );
}
