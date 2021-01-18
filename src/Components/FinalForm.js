import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
const FinalForm = ({ formData }) => {
  const {
    FirstName,
    LastName,
    Mobile,
    CollegeName,
    CollegeLocation,
    CardName,
  } = formData;
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>Your First Name: {FirstName}</Typography>
          <Typography>Your Last Name: {LastName}</Typography>
          <Typography>Your Mobile Number: {Mobile}</Typography>
          <Typography>Your College Name:{CollegeName}</Typography>
          <Typography>Your College Location: {CollegeLocation}</Typography>
          <Typography>Your Card Number: {CardName}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default FinalForm;
