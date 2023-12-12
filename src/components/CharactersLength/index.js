import './index.css'

const CharactersLength = props => {
  const {characters} = props
  const {character, characterLength} = characters

  return (
    <li className="character-item">
      <p className="character">
        {character}: <span className="length">{characterLength}</span>
      </p>
    </li>
  )
}

export default CharactersLength
