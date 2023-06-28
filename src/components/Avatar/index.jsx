import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import jwtDecode from "jwt-decode";

export default function LetterAvatars({ handleOpen }) {
  const name = jwtDecode(localStorage.getItem("token")).name.split(" ");
  const firstName = name[0];
  const lastName = name[1];

  const letterAvatar = firstName.charAt(0) + lastName.charAt(0);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange["900"], marginRight: "0.9rem" }}
        // onClick={() => handleOpen()}
      >
        {letterAvatar}
      </Avatar>
    </Stack>
  );
}
