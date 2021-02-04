import React from 'react';
import Header from './Header';
import Services from './Services';
import Comments from './Comments';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '720px',
        minWidth: '360px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        maxWidth: '720px',
        itemsAlign: 'center',
        margin: 'auto',
        boxShadow: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.card}>
                <Header/>
                <Services/>
                <Comments/>
            </Paper>
        </div>
  );
}

export default App;
