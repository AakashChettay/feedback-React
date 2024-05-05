import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {notGotFeedback: true}

  giveFeedback = () => {
    this.setState({notGotFeedback: false})
  }

  render() {
    const {notGotFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return notGotFeedback ? (
      <div className="bg-container">
        <div className="card">
          <h1 className="headStyle">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="reactionsContainer">
            {emojis.map(reaction => (
              <li key={reaction.id}>
                <img
                  onClick={this.giveFeedback}
                  id={reaction.name}
                  src={reaction.imageUrl}
                  alt={reaction.name}
                />
                <p>{reaction.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="main-container">
        <div className="card-main">
          <img className="loveEmoji" src={loveEmojiUrl} alt="love emoji" />
          <h1 className="ThankHead">Thank You!</h1>
          <p className="feedbackAckPara">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
