import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css';

const Message = React.forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    // console.log('isUser', isUser)

    return (
        <div key={message.id} ref={ref} className={`message__card ${isUser && 'message__card__user'}`}>
            <Card className={isUser ? 'message__user' : 'message__guest'}>
                <CardContent>
                    <Typography
                        variant='h5'
                        component='h2'
                    >
                        {!isUser && `${message.username || 'Unknown User'} :`} {message.text} 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message