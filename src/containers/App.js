import React from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import { setSearchField } from "../actions"
import { connect } from "react-redux"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: []
    }
  }
  // onSearchChange = event => {
  //   this.setState({
  //     searchfield: event.target.value
  //   })
  // }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => {
        this.setState({
          robots: response
        })
      })
  }
  render() {
    const { searchField, onSearchChange } = this.props
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
