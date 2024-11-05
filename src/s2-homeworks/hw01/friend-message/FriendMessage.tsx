import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";


// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.chat.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.chat.id}
                    src={props.chat.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.chat.id}
                        className={s.friendName}
                    >
                        {props.chat.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.chat.id}
                        className={s.friendMessageText}
                    >
                        {props.chat.message.text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.chat.id}
                className={s.friendTime}
            >
                {props.chat.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
