import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const PaymentForm = ({ formData, setFormData, nextStep }) => {
  const validationSchema = Yup.object({
    CardName: Yup.string().required("Card Name"),
    // CVV: Yup.number().required("CVV"),
  });
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });
  const { values, handleSubmit, handleChange, errors } = formik;

  return (
    <div>
      <Box>
        <h1>Payment Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="CardName"
            variant="outlined"
            onChange={handleChange}
            value={values?.CardName}
            error={!!errors.CardName}
            color="primary"
            label="Card Name"
          />
          {/* <TextField
            id="CardNumber"
            variant="outlined"
            value={values?.CardNumber}
            error={errors.CardNumber}
            onChange={handleChange}
            color="primary"
            label="Card Number"
          />
          <TextField
            id="CVV"
            variant="outlined"
            color="primary"
            onChange={handleChange}
            error={errors.CVV}
            value={values?.CVV}
            label="CVV"
          /> */}
          <Button type="submit" variant="outlined" color="primary">
            Next
          </Button>
        </form>
      </Box>
    </div>
  );
};
export default PaymentForm;
