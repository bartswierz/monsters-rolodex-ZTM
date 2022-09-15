// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;

/* OLD CLASS COMPONENT
class CardList extends Component {
  render() {
    // console.log(this.props); //this.props = the props we pass from App.js. We can pass ANYTHING INTO PROPS
    console.log("render");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
// This allows OTHER files to import this code OUTSIDE OF THIS FILE
export default CardList;
*/
