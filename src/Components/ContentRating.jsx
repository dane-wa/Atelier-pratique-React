
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      like :0,
      dislike:0,
      totalRatings:0,
      handleLike:() => {
        this.setState((prevState) => ({
          like:prevState.like + 1,
          totalRatings : prevState.totalRatings + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislike:prevState.dislike + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }

    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      </p>
      <div className='rating-buttons'>
        <button className='like-button' onClick={this.state.handleLike}>
          Aimer ({this.state.like})
        </button>
           
        <button className='dislike-button' onClick={this.state.handleDislike}>
          Ne pas aimer ({this.state.dislike})
        </button>
        <p>
          Total des évaluations : {this.state.totalRatings}
        </p>
        
      </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
