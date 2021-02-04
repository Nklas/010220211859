import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
    },
    Button: {
        backgroundColor: '#ffcc00',
        '&:hover': {
            backgroundColor: '#ffcc00',
        },
        width: '60%',
        height: '50px',
        textAlign: 'center',
        borderRadius: '50px',
        textTransform: 'none',
        marginTop: '30px',
        marginLeft: '20%'
    },
    textArea: {
        width: '100%',
        resize: 'none',
    },
    nameNumber: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 16,
        '& > *': {
            marginTop: 10,
            marginBottom: 10,
        },
    },
    date: {
        color: 'grey',
        fontSize: '14px',
        paddingLeft: 23,
    },
    mainText: {
        marginRight: '16px',
        marginLeft: '16px',
        backgroundColor: '#ebf9f9',
        border: 'solid grey 1px',
        padding: '10px',
        borderRadius: '7px',
        itemsAlign: 'center',
    },
    comment: {
        maxWidth: 720,
    },
    comments: {
        display: 'flex',
        marginLeft: '16px',
    },
    allComments: {
        padding: '21px'
    },
    footer: {
        marginTop: 15,
        backgroundColor: 'lightGrey',
        padding: '18px'
    },
    icons: {
        display: 'content',
        float: 'right',
        marginLeft: 'auto',
        paddingRight: '36px',
        marginTop: '19px'
    }
}));

export default function Comments() {
    const classes = useStyles();
    const initialState = [
        {
            author: 'Самуил',
            text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
            date: '13 октября 2011',
        },
        {
            author: 'Самуил',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
            date: '13 октября 2011',
        },
        {
            author: 'Самуил',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
            date: '13 октября 2011',
        },
    ];
    const [state, setState] = React.useState(initialState);
    const [feedback, setFeedback] = React.useState('');

    const renderComments = () => {
        if (state.length > 0) {
            return (
                <React.Fragment>
                    {state.map((i, index) => (
                        <div key={index} className={classes.comment}>
                            <div className={classes.nameNumber}>
                                <h4>{i.author}</h4><span className={classes.date}>{i.date}</span>
                            </div>
                            <div className={classes.mainText}>
                                {i.text}
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            )
        }
    };

    const handleAddComment = () => {
        const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };
        const newItem =  {
            author: 'author',
            text: feedback,
            date: (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)
        };

        const newList = state.concat(newItem);

        setState(newList);
        setFeedback('');
    };

    const handleOnKeyUp = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleAddComment();
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.comments}>
                <h3>Последние отзывы</h3>
                <div className={classes.allComments}><a href='#'>Все отзывы</a></div>
                <div className={classes.icons}>
                    <FavoriteBorderIcon/>131<ChatBubbleIcon/>{state.length}
                </div>
            </div>
            {renderComments()}
            <div className={classes.footer}>
                <TextareaAutosize
                    className={classes.textArea}
                    rowsMin={3}
                    rowsMax={4}
                    value={feedback}
                    onChange={(event) => setFeedback(event.target.value)}
                    onKeyUp={handleOnKeyUp}
                />
                <Button className={classes.Button} variant="contained" onClick={handleAddComment}>
                    <h3>Написать консультанту</h3>
                </Button>
            </div>
        </div>
    );
}