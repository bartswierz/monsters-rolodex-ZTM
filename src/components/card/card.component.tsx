// import { Component } from "react";
import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  // Destructuring passed in prop
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&seize=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

/* CLASS VERSION
class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div class="card-container" key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&seize=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
*/
