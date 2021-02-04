import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '355px',
        float: 'right',
    },
    text: {
        marginLeft: '255px'
    },
    numbers: {
        float: 'right',
        marginLeft: 'auto',
        paddingRight: '60px'
    },
    progressBar: {
        background: 'linear-gradient(90deg, #33cc00 70%, #ffffff 50%)',
        padding: '6px',
    },
    progressBar1: {
        background: 'linear-gradient(90deg, #33ccff 12%, #ffffff 8%)',
        padding: '6px',
    },
    progressBar2: {
        background: 'linear-gradient(90deg, #33ccff 8%, #ffffff 5%)',
        padding: '6px',
    }
}));

export default function Services() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <span className={classes.text}>Услуг</span><hr/>
                <div className={classes.progressBar}>Ручное бронирование <strong className={classes.numbers}>11</strong></div>
                <div className={classes.progressBar1}>Пакетные туры <strong className={classes.numbers}>3</strong></div>
                <div className={classes.progressBar2}>Отели <strong className={classes.numbers}>1</strong></div><hr/>
                <h3>Всего <strong className={classes.numbers}>15</strong></h3>
            </div>
        </div>
    );
}