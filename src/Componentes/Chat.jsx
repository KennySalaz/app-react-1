import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from 'react';
import { auth, dataBase } from '../firebase';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import firebase from 'firebase'




const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

const Chat = () => {
    const classes = useStyles();
    const [messages, setmessages] = useState([])
    const [messageInput, setMessageInput] = useState('')

    const addMessage = (messageItem) => {

        messages.push(messageItem)
        setmessages([...messages])
    }

    useEffect(() => {
        const chatRef = dataBase.ref('ChatUser')
        chatRef.on('child_added', snapshot => {
            // nuevo mensaje 
            const messageItem = snapshot.val()
            // leer los datos del user
            dataBase.ref(`/useri5/${messageItem.user}`)
                .once('value')
                .then(resultmessage => {
                    messageItem.user = resultmessage.val()
                    addMessage(messageItem)

                })
        }, error => {
            console.log(error.message)
        })

    }, [])

    const handleSbmit = (e) => {
        e.preventDefault()
        const {uid} = auth.currentUser
        if(!uid) return

    const newMessages = {
        user: uid,
        messageInput,
        date: firebase.database.ServerValue.TIMESTAMP
    }

    dataBase.ref('/ChatUser').push(newMessages)
    .then( resp => {
        setMessageInput('')
    }).catch(error => {
        alert(error.message)
    })

    }

   

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    Inbox
                </Typography>
                <List className={classes.list}>
                    {messages.map(({ date, messageInput, user }) => (

                        <ListItem button key={date}>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={user?.avatar} />
                            </ListItemAvatar>
                            <ListItemText primary={user ? user.name : 'anonymus'} secondary={messageInput} />
                           
                        </ListItem>

                    ))}
                </List>
            </Paper>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>


                    <div className={classes.grow} />
                    <form className={classes.root} onSubmit={handleSbmit}>
                        <TextField 
                        id="standard-basic" 
                        label="message"
                        onChange={e => setMessageInput(e.target.value)}
                        />
                        <Button  >
                            enviar

                        </Button>

                    </form>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
export default Chat