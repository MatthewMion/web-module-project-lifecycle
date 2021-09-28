import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Typography, Paper, Box } from "@mui/material";

export class App extends Component {
  state = {
    userData: [],
    followers: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/MatthewMion").then((res) => {
      // console.log(res.data);
      this.setState({
        ...this.state,
        userData: res.data,
      });
    });
    axios
      .get("https://api.github.com/users/MatthewMion/followers")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          followers: res.data,
        });
      });
  }

  render() {
    return (
      <Box className="user-card">
        <Typography variant="h1">GitHub User Card</Typography>
        <Paper sx={{ padding: "5% 10%", alignItems: "center" }}>
          <Typography variant="h2" color="primary">
            {this.state.userData.name}
          </Typography>
          <Typography variant="h5" color="secondary">
            {this.state.userData.login}
          </Typography>
          <Typography variant="h5" color="secondary">
            {this.state.userData.bio}
          </Typography>
          <Typography variant="h5" color="secondary">
            <span>Followers: </span>
            {this.state.userData.followers}
          </Typography>
          <Typography variant="h5" color="secondary">
            <span>Following:</span> {this.state.userData.following}
          </Typography>
          <Typography variant="h3" color="primary">
            Followers Info:
          </Typography>
        </Paper>
        <div className="followers-cards">
          {this.state.followers.map((item) => {
            return (
              <Paper className="follower-card" key={item.id}>
                <Typography variant="h5">{item.login}</Typography>
                <img src={item.avatar_url} alt="avatar pic" />
              </Paper>
            );
          })}
        </div>
      </Box>
    );
  }
}

export default App;
