import React from 'react';
import { Card as StoryCard, Button } from 'react-bootstrap';

export function Card(props) {
  const { title, abstract, multimedia } = props;
  const imageSrc = Array.isArray(multimedia) && multimedia[1].url;

  return (
    <StoryCard style={{ width: '18rem' }}>
      <StoryCard.Img variant="top" src={imageSrc} />
      <StoryCard.Body>
        <StoryCard.Title>{title}</StoryCard.Title>
        <StoryCard.Text>
          {abstract}
        </StoryCard.Text>
        <Button variant="primary">Read more</Button>
      </StoryCard.Body>
    </StoryCard>
  )
}
