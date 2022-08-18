import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getTopStories } from '../../../../services/getTopStories'
import { Card } from './components/Card';

export function News() {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopStories().then(body => setNews(body.results));
    setIsLoading(false)
  }, [])

  return (
    <main>
      <Container className='d-flex flex-wrap gap-3'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(news) && news.map(story => <Card key={story.uri} {...story} />)}
      </Container>
    </main>
  )
}
