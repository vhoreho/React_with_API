import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { getArticle } from '../services/getArticle';

export function Article() {
  const [article, setArticle] = useState(null);
  const { uri } = useParams();

  useEffect(() => {
    getArticle(uri).then(body => setArticle(body.response.docs[0]));
  }, [uri])

  return (
    <Container>

      <Card>
        <Card.Header>{article.headline.main}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {article.abstract}{' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{article.byline.original}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  )
}
