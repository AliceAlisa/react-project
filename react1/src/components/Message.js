export const Message = (props) => {
    return (
        <div style={{ margin: '0 auto', border: '3px solid green', width: '350px', padding: '10px', fontSize: '32px' }}>
            {props.text}
        </div>
    );
}