import { visuallyHidden } from "@base-ui-components/react/utils";
import { LocationPin, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  SxProps,
  Theme,
} from "@mui/material";

type SearchProps = {
  sx?: SxProps<Theme>;
};

export default function Search({ sx }: SearchProps) {
  return (
    <Box
      component="form"
      role="search"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 4,
        p: 2,
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: 2,
        boxShadow: 2,
        ...sx,
      }}
    >
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel htmlFor="search-event" shrink sx={visuallyHidden}>
          Suche nach Events
        </InputLabel>
        <InputBase
          placeholder="Suche nach Events"
          type="search"
          role="searchbox"
          aria-label="Suche nach Events"
          id="search-event"
          sx={{
            borderWidth: 1,
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined color="primary" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel htmlFor="search-place" shrink sx={visuallyHidden}>
          Stadt, Ort
        </InputLabel>
        <InputBase
          placeholder="Stadt, Ort"
          type="search"
          role="searchbox"
          aria-label="Stadt, Ort"
          id="search-place"
          sx={{
            borderWidth: 1,
          }}
          startAdornment={
            <InputAdornment position="start">
              <LocationPin color="primary" />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button startIcon={<SearchOutlined />}>Search</Button>
    </Box>
  );
}
