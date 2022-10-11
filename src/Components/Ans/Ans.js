import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Ans = ({correctAnswer}) => {
    const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Correct Answer</Alert.Heading>
        <p>
          {correctAnswer}
          </p>
      </Alert>
    );
  }
  return <Button className='shadow-lg' variant="success" onClick={() => setShow(true)}>Correct Answer</Button>;

};

export default Ans;