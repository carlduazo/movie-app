import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieItem from './MovieItem';
const movies = [
  {
    id: 0,
    title: "When Harry Met Sally",
    releaseDate: "1/11/1989",
    genre: "Romantic Comedy",
    price: "9.99",
    rating: "R",
    posterLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
  }, {
    id: 1,
    title: "Ghostbusters 2",
    releaseDate: "2/23/1986",
    genre: "Comedy",
    price: "7.99",
    rating: "R",
    posterLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
  }, {
    id: 2,
    title: "Ghostbusters 3",
    releaseDate: "3/13/1989",
    genre: "Comedy",
    price: "9.99",
    rating: "R",
    posterLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
  }
];

localStorage.setItem('movies', JSON.stringify(movies));


class MovieApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: JSON.parse(localStorage.getItem('movies'))
    };
    this.onAdd = this.onAdd.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  componentWillMount(){
    const movies = this.getMovies();

    this.setState({ movies });
  }

  getMovies(){
    return this.state.movies
  }

  onAdd(title, price, releaseDate, genre, rating, posterLink) {
    const movies = this.getMovies();

    movies.push({
      title,
      releaseDate,
      genre,
      price,
      rating,
      posterLink
    });

    this.setState({ movies });
  }

  onDelete(title){
    const movies = this.getMovies();

    const filteredMovies = movies.filter( movie => {
      return movie.title !== title;
    });

    console.log(filteredMovies)

    this.setState( {movies:filteredMovies } );

  }

  onEditSubmit(title, releaseDate, genre, price, rating, posterLink, originalTitle){
    let movies = this.getMovies();

    movies = movies.map( movie => {
      if(movie.title === originalTitle){
        movie.title = title;
        movie.releaseDate = releaseDate;
        movie.genre = genre;
        movie.price = price;
        movie.rating = rating;
        movie.posterLink = posterLink;
      }

      return movie;
    });

    this.setState({movies});
  }

  render() {
    return (
      <div className="App wrapper">
        <h1>Now Showing</h1>
        <div className="leftWing">
        <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Rating</th>
                        
                        <th colSpan='3'>&nbsp;</th>
                    </tr>
                 </thead>
                   {
          this.state.movies.map( movie => {
            return (
              <MovieItem 
                key={movie.title}
                {...movie}
                onDelete={this.onDelete}
                onEditSubmit = {this.onEditSubmit}
              />
            )
          })
        }
       </table>
        </div>
        <div className="rightWing">
        <AddMovie 
          onAdd = {this.onAdd}
        />
        </div>
        
        
      </div>
    );
  }
}

export default MovieApp;
