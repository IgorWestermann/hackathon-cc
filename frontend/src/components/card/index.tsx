import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  link: string;
}

export default class Card extends React.Component<CardProps, {}> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <nav>
          <div className="main">
            <h1>{this.props.title}</h1>
            <button>
              <Link to={this.props.link}>Acessar</Link>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
