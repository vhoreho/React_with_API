import React from 'react'
import { Container } from 'react-bootstrap'

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='my-3'>
      <Container className='text-center'>
        <b>Created at {currentYear}</b>
      </Container>
    </footer>
  )
}
