import React, { Component } from 'react';
import './stylesheet.css';


class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      isView: false
    }

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onView = this.onView.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {

    const { onDelete, title } = this.props;
    onDelete(title);
  }

  onEdit(){
     this.setState({ isEdit: true})
  }

  onView(){
    this.setState({ isView: true})
 }

 onClose(){
  this.setState({ 
      isView: false,
      isEdit: false
  })
}

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.titleInput.value, this.releaseDateInput.value,this.genreInput.value,  this.priceInput.value,this.ratingInput.value, this.posterLinkInput.value, this.props.title)
    this.setState({ isEdit: false });
  }
 
  render() {
    const { title, releaseDate, genre, price, rating, posterLink } = this.props;
    let display;
    if (this.state.isEdit){
      display = <tr className="on-edit">
      <td colSpan="8">
      <form onSubmit={this.onEditSubmit} className="form-inline">
      <h4>Update Information</h4>
      <h2>{title}</h2>
    <div>
      <input placeholder="Title" ref={titleInput => this.titleInput = titleInput} defaultValue={title}/>
      <input placeholder="Release Date" ref={releaseDateInput => this.releaseDateInput = releaseDateInput} defaultValue={releaseDate}/>
      <input placeholder="Price" ref={genreInput => this.genreInput = genreInput} defaultValue={genre}/>
      <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
      <input placeholder="Rating" ref={ratingInput => this.ratingInput = ratingInput} defaultValue={rating}/>
      <input placeholder="Rating" ref={posterLinkInput => this.posterLinkInput = posterLinkInput} defaultValue={posterLink}/>
      <br/>
      <button>Save</button>
      <button onClick={this.onClose}>Cancel</button>
      </div>
    </form>
      </td>
    </tr>
    } else if (this.state.isView){
      display = <tr className="on-view">
      <td colSpan="8">
        <div className="content">
        <div className="image">
          <div className="img-holder">
            <img src={posterLink} class="img-auto-place"/>
          </div>
        </div>
        <div className="info">
          <div className="detail">
            <strong>Title: </strong>
            <p>{title}</p>
          </div>
          <div className="detail">
            <strong>Release Date: </strong>
            <p>{releaseDate}</p>
          </div>
          <div className="detail">
            <strong>Genre: </strong>
            <p>{genre}</p>
          </div>
          <div className="detail">
            <strong>Price: </strong>
            <p>{price}</p>
          </div>
          <div className="detail">
            <strong>Rating: </strong>
            <p>{rating}</p>
          </div>
          </div>
        </div>
        <button onClick={this.onClose}>Close</button>
      </td>
    </tr>
    }else{
      display = <tr>
                
                <td width='30%'>{title}</td>
                <td>{releaseDate}</td>
                <td>{genre}</td>
                <td>$ {price}</td>
                <td>{rating}</td>
                <td><a className='action-button details' onClick={this.onView}>Details</a></td>
                <td><a className='action-button edit' onClick={this.onEdit}>Edit</a></td>
                <td><a className='action-button remove' onClick={this.onDelete}>Delete</a></td>
            </tr>
    }
    return (
      <tbody>
        {display}
        </tbody>
    );
  }
}

export default MovieItem;
