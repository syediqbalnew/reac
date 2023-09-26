import React, { Component } from "react";
import SongCard from"./components/SongCard";
import songs from"./services/song";

class Iq extends Component {
  state={
    songs
  };
  sortByRating =()=>{
    this.setState({
      songs:[...this.state.songs.sort((a,b)=>b.rating - a.rating)]
    });
  };
  sortByTitle = () =>{
    this.setState({
      songs:[...this.state.songs.sort((a,b)=>a.title.toUpperCase()<b.title.toUpperCase() ? -1:1)]
      });
    };
  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <div id="song-list">
          <button className="st-btn"onClick={this.sortByTitle} >Sort by title</button>
          <button className="st-btn"onClick={this.sortByRating} >Sort by rating</button>
          {this.state.songs.map(song=>(
            <SongCard Key={song.id}data={song}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Iq;
