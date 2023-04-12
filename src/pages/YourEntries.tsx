import {
  Card,
  CardHeader,
  FormGroup,
  FormControlLabel,
  Switch,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const YourEntries = () => {
  const [entriesList, setEntriesList] = useState([]);

  useEffect(() => {
    // fetch data from mockoon
    const getEntries = async () => {
      const data = await (await fetch("http://localhost:3001/entries")).json();

      // set state when the data received
      setEntriesList(data);
    };

    getEntries();
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      {entriesList &&
        entriesList.map((entry: any) => {
          return (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {entry.time}
                </Typography>
                <Typography variant="h5" component="div">{entry.mood}</Typography>
                <br />

                <Typography variant="body2">
                    {entry.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default YourEntries;
