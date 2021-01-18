import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const PersonnelForm = ({ formData, setFormData, nextStep }) => {
  const validationSchema = Yup.object({
    FirstName: Yup.string().required("First Name"),
    LastName: Yup.string().required("Last Name"),
  });
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });
  const { values, errors, handleSubmit, handleChange } = formik;
  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          <h1>Personnel Detail Form</h1>
          <div>
            <TextField
              id="FirstName"
              variant="outlined"
              onChange={handleChange}
              error={!!errors.FirstName}
              value={values?.FirstName}
              helperText={errors.FirstName}
              color="primary"
              label="First Name"
            />
          </div>
          <div>
            <TextField
              id="LastName"
              variant="outlined"
              color="primary"
              onChange={handleChange}
              value={values?.LastName}
              error={!!errors.LastName}
              label="Last Name"
            />
          </div>
          <div>
            <TextField
              id="Mobile"
              variant="outlined"
              color="primary"
              onChange={handleChange}
              value={values?.Mobile}
              error={!!errors.Mobile}
              label="Mobile"
            />
          </div>
          <Button type="submit" variant="outlined" color="primary">
            Next
          </Button>
        </form>
      </Box>
    </div>
  );
};
export default PersonnelForm;
