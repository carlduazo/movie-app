import React, { Component } from 'react';
import './stylesheet.css';


class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();

    if(this.titleInput.value&&this.releaseDateInput.value&&this.genreInput.value&&this.priceInput.value&&this.ratingInput.value&&this.posterLinkInput.value){
      this.props.onAdd(this.titleInput.value, this.releaseDateInput.value, this.genreInput.value, this.priceInput.value, this.ratingInput.value, this.posterLinkInput.value);

      this.titleInput.value = '';
      this.releaseDateInput.value = '';
      this.genreInput.value = '';
      this.priceInput.value = '';
      this.ratingInput.value = '';
      this.posterLinkInput.value = '';
    }else{
      alert( "All fields are required. Please try again." );
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
          <h3>Add Movie</h3>
          <p className='note'>*All field are required</p>
          
          <input placeholder="Title" ref={titleInput => this.titleInput = titleInput}/>
          <input placeholder="Release Date" ref={releaseDateInput => this.releaseDateInput = releaseDateInput}/>
          <input placeholder="Genre" ref={genreInput => this.genreInput = genreInput}/>
          <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
          <input placeholder="Rating" ref={ratingInput => this.ratingInput = ratingInput}/>
          <input placeholder="Poster Link" ref={posterLinkInput => this.posterLinkInput = posterLinkInput}/>
          <button>Add</button>

      </form>
    )
  }
}

export default AddMovie;
