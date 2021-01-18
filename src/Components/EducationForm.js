import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const EducationForm = ({ formData, setFormData, nextStep }) => {
  const validationSchema = Yup.object({
    CollegeName: Yup.string().required("College Name"),
    CollegeLocation: Yup.string().required("College Area Required"),
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
        <h1>Education Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="CollegeName"
            variant="outlined"
            color="primary"
            onChange={handleChange}
            error={!!errors.CollegeName}
            value={values?.CollegeName}
            label="College Name"
          />
          <TextField
            id="CollegeLocation"
            variant="outlined"
            color="primary"
            label="College Location"
            onChange={handleChange}
            error={!!errors.CollegeLocation}
            value={values?.CollegeLocation}
          />
          <Button type="submit" variant="outlined" color="primary">
            Next
          </Button>
        </form>
      </Box>
    </div>
  );
};
export default EducationForm;
