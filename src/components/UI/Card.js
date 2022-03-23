import './Card.css';

const Card = (props) => {
// get other classes on the component applied;
  const classes = 'card ' + props.className;

// makes component be parent of children component
  return <div className={classes}>{props.children}</div>;
};

export default Card;