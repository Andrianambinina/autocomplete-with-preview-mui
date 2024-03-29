import { Box, Container, Stack, Typography, Paper } from "@mui/material";

import ArticleForm from "./containers/articles/ArticleForm";
import TeamForm from "./containers/teams/TeamForm";

const App = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 2
        }}
      >
        <div>
          <Stack spacing={3}>
            {/* <Typography variant="h5">
              Creatable Autocomplete with MUI and React Hook Form
            </Typography> */}
            <Paper elevation={4} sx={{ px: 4, pb: 4, pt: 2 }}>
              <Stack spacing={2}>
                <Typography variant="h6">Teams</Typography>
                {/* <ArticleForm /> */}
                <TeamForm />
              </Stack>
            </Paper>
          </Stack>
        </div>
        <div>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
              {/* <Typography>By Zo Andrianambinina</Typography> */}
            </a>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default App;
