import { useState } from "react";

import { Box, Button, Stack } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ITeamInput } from "../../types/teamTypes";
import { teamSchema } from "../../utils/validations/teamValidations";
import AutoCompleteWithPreviewField from "../../components/form/fields/AutoCompleteWithPreviewField";

const TeamForm = () => {
  const [teamsValues, setTeamsValues] = useState([]);

  const form = useForm<ITeamInput>({
    resolver: zodResolver(teamSchema)
  });

  const users = [
    {
      objectId: "xdfgvzedfg",
      username: "coco@yopmail.com",
      email: "coco@yopmail.com"
    },
    {
      objectId: "vxdkljlfs",
      username: "riri@yopmail.com",
      email: "riri@yopmail.com"
    }
  ];
  const memberOptions = users.map((user) => ({
    id: user.objectId,
    label: user.username,
    value: user
  }));

  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<ITeamInput> = (values) => {
    setTeamsValues((prevValues) => [...prevValues, values]);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <AutoCompleteWithPreviewField
            name="members"
            label="Ajouter des membres"
            options={memberOptions}
          />
          <Box className="flexRow justifyEnd">
            <Button type="submit" variant="contained" sx={{ py: 1.5, px: 4 }}>
              Save
            </Button>
          </Box>
        </Stack>
      </form>
      {/* result */}
      {teamsValues && <Box>{JSON.stringify(teamsValues)}</Box>}
    </FormProvider>
  );
};

export default TeamForm;
