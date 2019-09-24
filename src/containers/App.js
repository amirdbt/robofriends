import React from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import { setSearchField, requestRobots } from "../actions"
import { connect } from "react-redux"
import "./App.css"

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     robots: []
  //   }
  // }
  // onSearchChange = event => {
  //   this.setState({
  //     searchfield: event.target.value
  //   })
  // }
  componentDidMount() {
    this.props.onRequestRobots()
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(response => {
    //     this.setState({
    //       robots: response
    //     })
    //   })
  }
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
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
const mapStateToProps = state => {
  return {
    searchField: state.searchRobot.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
