import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeeds'
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="10842852-2b08-488f-81d6-f2b0a77d84c5"
            userName="MrX"
            userSecret="123123"
            renderChatFeed=
            {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App