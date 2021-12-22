import '../App.css';
import { Button } from "@material-ui/core";

export const Error = ({ reload }) => (
    <div className='error-container'>
        <h1>Oops, something went wrong!</h1>
        <Button variant="contained" onClick={reload}>Reload</Button>
    </div>
)