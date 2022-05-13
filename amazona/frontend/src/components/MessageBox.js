import { Alert, Spinner } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
