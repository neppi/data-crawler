import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';

const Readme = (): React.ReactElement => {
  const [readme, setReadme] = React.useState('');

  useEffect(() => {
    fetch('/readme.md')
      .then((response) => response.text())
      .then((text) => {
        setReadme(text);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <Container>
      <ReactMarkdown className="mt-5">{readme}</ReactMarkdown>
    </Container>
  );
};

export default Readme;
