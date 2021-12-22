import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoading, getNews } from '../../store/news/selectors';
import { getNewsThunk } from '../../store/news/actions'
import { useEffect } from 'react';
import { Loader } from '../../components/Loader';
import { ItemsList } from '../../components/ItemsList';
import { Error } from '../../components/Error';

export const News = () => {
    const isLoading = useSelector(getLoading);
    const isError = useSelector(getError);
    const news = useSelector(getNews);

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getNewsThunk);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='news-container'>
            <div className='nav'>
                <Link to='/' className='link-nav'> Home </Link> /
                <Link to='/profile' className='link-nav'> Profile </Link> /
                <Link to='/chats' className='link-nav'> Chats </Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>News</h1>
            <Button variant="contained" onClick={getData}>Recall effect</Button>
            {
                isLoading && <Loader />
            }
            {
                isError &&
                <Error reload={getData} />
            }
            {
                !isLoading && !isError && news.data.length > 0 &&
                <ItemsList list={news.data} />
            }
        </div>
    );
}