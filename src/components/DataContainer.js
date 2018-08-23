import React from "react";

export default class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    // If the component is mounted with a searchTerm then getData
    if (this.props.searchTerm) {
      this.getData();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.getData();
    }
  }
  getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = e => {
      if (e.target.readyState === 4) {
        if (e.target.status === 200) {
          const data = JSON.parse(e.target.responseText);
          console.log(data);
          if (this.props.method === "search") {
            this.props.dataCallback(data.items);
          } else if (this.props.method === "find") {
            this.props.dataCallback(data);
          }
        } else {
          console.log("Error");
        }
      }
    };
    if (this.props.method === "search") {
      // Perform a search
      const url = `https://www.googleapis.com/books/v1/volumes?q=${
        this.props.searchTerm
      }`;
      xhttp.open("GET", url, true);
    } else if (this.props.method === "find") {
      // Find a specific volume by ID
      const url = `https://www.googleapis.com/books/v1/volumes/${
        this.props.searchTerm
      }`;
      xhttp.open("GET", url, true);
    }
    xhttp.send();
  }
  render() {
    return <div />;
  }
}
