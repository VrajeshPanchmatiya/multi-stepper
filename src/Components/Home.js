import React, { useState } from "react";
import PersonnelForm from "./PersonnelForm";
import PaymentForm from "./PaymentForm";
import EducationForm from "./EducationForm";
import ErrorPage from "./ErrorPage";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  Switch,
  CardContent,
  Typography,
} from "@material-ui/core";
import FinalForm from "./FinalForm";
const Home = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Mobile: "",
    CollegeName: "",
    CollegeLocation: "",
    CardName: "",
    CVV: "",
  });
  const getSteps = () => {
    return ["PersonnelForm", "PaymentForm", "EducationForm", "FinalForm"];
  };
  const steps = getSteps();
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonnelForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <PaymentForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <EducationForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );

      case 3:
        return <FinalForm formData={formData} />;
      default:
        return <ErrorPage />;
    }
  };
  return (
    <Card>
      <CardContent>
        <h1>Your Information</h1>
        <Stepper activeStep={step}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>{renderForm(step)}</div>
      </CardContent>
    </Card>
  );
};
export default Home;
