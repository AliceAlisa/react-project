import { Card, CardContent, Typography } from "@material-ui/core";
import { nanoid } from 'nanoid'
import '../App.css';

export const ItemsList = ({ list }) => (
    <div className='items-container'>
        <ul>
            {
                list?.map(({ title, content }) => (
                    <Card sx={{ minWidth: 275 }} key={nanoid()}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2">
                                {content}
                                <br />
                            </Typography>
                        </CardContent>
                    </Card>

                ))
            }
        </ul>
    </div>
)