import React from 'react';
import { Typography, Card, CardContent, CardHeader } from '@mui/material';

export default function CustomReports() {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title="Report 1" />
        <CardContent>
          {/* Your custom report 1 content goes here */}
          <Typography>This is custom report 1.</Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 400, mt: 2 }}>
        <CardHeader title="Report 2" />
        <CardContent>
          {/* Your custom report 2 content goes here */}
          <Typography>This is custom report 2.</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
