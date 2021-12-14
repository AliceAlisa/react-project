import { List, ListItem } from "@material-ui/core";

export const Chats = ({ list }) => {
    return (
        <List className="chats"> {
            list.map((chat) => <ListItem className="chat_name" key={chat.id}>{chat.name}</ListItem>)
        }
        </List>
    );
}