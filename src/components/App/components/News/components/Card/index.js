import React from 'react';
import { Link } from 'react-router-dom'
import { Card as StoryCard } from 'react-bootstrap';

export function Card(props) {
  const { title, abstract, multimedia, uri } = props;
  const URL = uri.slice(6);
  const imageSrc = Array.isArray(multimedia) && multimedia[1].url;

  return (
    <StoryCard style={{ width: '18rem' }}>
      <StoryCard.Img variant="top" src={imageSrc} />
      <StoryCard.Body>
        <StoryCard.Title>{title}</StoryCard.Title>
        <StoryCard.Text>
          {abstract}
        </StoryCard.Text>
        <Link to={`/${URL}`}>Read more</Link>
      </StoryCard.Body>
    </StoryCard>
  )
}
