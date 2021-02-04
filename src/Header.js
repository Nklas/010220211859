import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatarText: {
        display: 'inline',
    },
    avatar: {
        verticalAlign: 'middle',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        position: 'absolute'
    },
    imageText: {
        backgroundColor: 'rgb(255, 245, 200)',
        border: 'solid #c1c1c1 1px ',
        borderRadius: '7px',
        right: '64px',
        top: '50px',
        paddingLeft: '85px',
        paddingRight: '18px',
        marginLeft: '46px',
        marginTop: '9px',
        paddingTop: '5px',
        paddingBottom: '5px'
    },
    name: {
        left: '20px',
        marginLeft: '133px',
        marginBottom: '8px'
    },
    secondaryText: {
        marginLeft: '133px',
        marginBottom: '12px',
        color: 'grey',
        fontSize: '13px'
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src="../1.png" alt="Avatar" className={classes.avatar}/>
                <h3 className={classes.name}>Вероника Ростова</h3>
                <div className={classes.secondaryText}>Менеджер по продажам</div>
                <p className={classes.imageText}>Подберу для вас самые лучшие предложения.<br/>
                    Мои услуги абсолютно бесплатны
                </p>
        </div>
    );
}