import React from 'react';
import { Container } from 'react-bootstrap';
import News from '../../components/News/News';
import useNews from '../../hooks/useNews';

const AllNews = () => {

    // news data from custom hooks
    const [news] = useNews()
    return (
        <Container>
                {
                    // map data and passing every items to the News components
                    news.map(singleNews => 
                        <News
                            key={singleNews.id}
                            news={singleNews}
                        ></News>
                    )
                }
        </Container>
    );
};

export default AllNews;