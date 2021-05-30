import styled from 'styled-components'
import { colors } from '../../styles/utils/_vars'

const Card = styled.div`
  background-color: ${colors.Ivory};
  color: ${colors.TextDark};
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 350px;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 1rem;
  box-shadow: 5px 5px 35px #00000050;
  flex-basis: 50%;
`

const CircleImage = styled.img`
  border-radius: 50%;
  border: 4px solid ${colors.GreenBlue};
  object-fit: cover;
  box-shadow: 5px 5px 15px #00000050;
`

const Usercard = ({ avatar, location, name }) => {
  return (
    <Card>
      <CircleImage
        src={avatar}
        alt="avatar"
      />
      <div>
        <h5>
          {name.title} {name.first} {name.last}
        </h5>
        <p>
          {location.city}, {location.state}, {location.country}
        </p>
      </div>
    </Card>
  )
}

export default Usercard
