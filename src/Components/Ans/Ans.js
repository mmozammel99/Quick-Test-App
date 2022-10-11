import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import eye from '../../img/eye.png';
const Ans = ({correctAnswer}) => {
    const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert className='m-0' variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Answer</Alert.Heading>
        <p>
          {correctAnswer}
          </p>
      </Alert>
    );
  }
  return <Button   variant="success" onClick={() => setShow(true)}> <img src={eye} className="bg-none" alt="" />
  </Button>;

};

export default Ans;