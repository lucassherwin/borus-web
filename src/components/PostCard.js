import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    height: 250,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    textAlign: 'center'
  },
  content: {
    color: 'black'
  }
});

export default function PostCard({ title, content }) { // eventually add in author, votes, etc
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card} variant='outlined'>
        <CardContent>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.content}>{content}</p>
        </CardContent>
      </Card>
    </div>
  );
};
