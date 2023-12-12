import {Component} from 'react'
import {v4} from 'uuid'

import CharactersLength from '../CharactersLength'

import './index.css'

class CharacterCounter extends Component {
  state = {charactersList: [], textInput: ''}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {textInput} = this.state

    const updatedList = {
      id: v4(),
      character: textInput,
      characterLength: textInput.length,
    }

    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, updatedList],
      textInput: '',
    }))
  }

  render() {
    const {charactersList, textInput} = this.state

    return (
      <div className='app-container'>
        <div className='character-length-container'>
          <h1 className='counter-heading'>
            Count the characters like a <br />
            Boss...
          </h1>
          <div className='image-and-length-container'>
            {charactersList.length < 1 ? (
              <img
                src='https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'
                alt='no user inputs'
                className='image'
              />
            ) : (
              <ul className='characters-list'>
                {charactersList.map(eachChar => (
                  <CharactersLength key={eachChar.id} characters={eachChar} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='characters-typing-container'>
          <h1 className='character-heading'>Character Counter</h1>
          <form onSubmit={this.onClickSubmit} className='form-container'>
            <input
              type='text'
              value={textInput}
              placeholder='Enter the Characters here'
              onChange={this.onChangeInput}
              className='input-field'
            />
            <button type='submit' className='add-button'>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
