import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css';

function Message({message, username}) {
    const isUser = username === message.username;
    // console.log('isUser', isUser)
    
    return (
        <div className={`message__card ${isUser && 'message__card__user'}`}>
            <Card className={isUser ? 'message__user' : 'message__guest'}>
                <CardContent>
                    <Typography
                        variant='h5'
                        component='h2'
                    >
                        {message.username}: {message.text} 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message