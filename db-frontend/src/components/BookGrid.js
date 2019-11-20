import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  Button,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BookConsumer } from "../context/bookContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    marginLeft: -44
  },
  paper: {
    height: 450,
    width: 300
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
}));

export default function BookGrid() {
  const classes = useStyles();
  const titleLength = 20;

  return (
    <BookConsumer>
      {books => {
        return (
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={4}>
                {books.map(value => (
                  <Grid key={value.Isbn} item>
                    <Card className={classes.paper}>
                      <CardHeader
                        title={
                          value.Title.substring(0, titleLength) +
                          (value.Title.length > titleLength ? "..." : "")
                        }
                        subheader={
                          value.Pages !== "0"
                            ? value.Pages + " pages"
                            : "No Page Data Found"
                        }
                      />
                      <CardMedia
                        className={classes.media}
                        image={value.Image}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>

                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-end"
                        mt={3}
                      >
                        <Box mr={2}>
                          <Link
                            to={"/book/" + value.Isbn}
                            style={{ textDecoration: "none" }}
                          >
                            <Button variant="contained">Details</Button>
                          </Link>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </BookConsumer>
  );
}