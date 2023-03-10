const MessageFrom = ({ message }) => {
    if (message?.attatchments.length > 0) {
        return (
            <img
                scr={message.attatchments[0].file}
                alt='message-attachment'
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    return (
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'3B2A50'}}>
            {message.text}
        </div>
    )
}
export default MessageFrom