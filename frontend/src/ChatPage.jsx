import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
    <div style={{ height: '100vh' }} >
        <PrettyChatWindow 
            projectId='3b9b12e4-c040-4ffe-80ef-de163cec392e'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
        
    </div>
    )
}

export default ChatsPage