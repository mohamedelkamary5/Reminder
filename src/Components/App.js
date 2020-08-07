import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import loge from "./../Reminder.jpg";
import { add_Reminder, remove_Reminder, clear_Reminders } from "../actions";
class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_reminders = () => {
    // console.log("props", this.props);

    const { reminders, remove_Reminder } = this.props;
    return (
      <ul className="list-group-item">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id}>
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.date)).fromNow()}</div>
              <button
                className="closeIcon btn btn-danger"
                onClick={() => {
                  remove_Reminder(reminder.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { add_Reminder, clear_Reminders } = this.props;
    const { text, date } = this.state;
    return (
      <div className="App">
        <img src={loge} alt="" />
        <div className="reminder-title ">
          <h2>What should you do ?</h2>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter What you think"
          onChange={(e) => this.setState({ text: e.target.value })}
          value={text}
        />

        <DatePicker
          className="form-control"
          placeholder="enter date"
          value={date}
          selected={date}
          onChange={(date) => this.setState({ date })}
          showTimeSelect
          timeFormat="HH:mm"
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm a"
        />
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            if (text === "" || date === new Date()) {
              return false;
            } else {
              add_Reminder(text, date);
              this.setState({ text: "", date: new Date() });
            }
          }}
        >
          Add Reminder
        </button>
        {this.render_reminders()}
        <button
          onClick={clear_Reminders}
          className="btn btn-danger btn-block clearReminder"
        >
          Remove Reminders
        </button>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//     return{
//         add_Reminder: () => dispatch(add_Reminder())
// }
// }

// function mapStateToProps(state) {
//     return reminders: state
// }

export default connect(
  (state) => {
    return {
      reminders: state,
    };
  },
  {
    add_Reminder,
    remove_Reminder,
    clear_Reminders,
  }
)(App);

// <input type='datetime-local' placeholder="enter date"  value={this.state.date} className="form-control" onChange={ e => this.setState({date: e.target.value}) } />
