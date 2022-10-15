import { InputAdornment, TextField } from "@mui/material";
import HailIcon from "@mui/icons-material/Hail";

const IntegrantsFilter = () => {
  return (
    <TextField
      defaultValue={1}
      label={"Integrantes"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HailIcon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

export default IntegrantsFilter;
