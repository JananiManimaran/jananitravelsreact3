import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="tj.jpg"/>
      <Card.Body>
        <Card.Title>Tom & Jerry</Card.Title>
        <Card.Text>
        Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;