import React from 'react'
import s from './Message.module.css'
import {MessageChatType, messageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    chat:MessageChatType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.chat.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.chat.id}
                    src={props.chat.user.avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.chat.id} className={s.name}>
                        {props.chat.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.chat.id} className={s.messageText}>
                        {props.chat.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.chat.id} className={s.time}>
                {props.chat.message.time}
            </div>
        </div>
    )
}

export default Message
