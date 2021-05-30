import { StyledContainer } from './components/styled/StyledContainer'
import Usercard from './components/styled/StyledUsercard'
import styles from './styles/app.module.scss'
import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log('Use Effect...')
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((result) => {
        const newUsers = [...users, result]
        setUsers(newUsers)
      })
    return () => {
      // cleanup
      setUsers([])
      setPage(1)
    }
    // eslint-disable-next-line
  }, [])

  const loadmore = () => {
    fetch(`https://randomuser.me/api?page=${page}`)
      .then((res) => res.json())
      .then((result) => {
        const newUsers = [...users, result]
        setUsers(newUsers.reverse())
        setPage(page + 1)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <StyledContainer>
        <div className={styles['header']}>
          <h1>User List</h1>
        </div>
        <div>
          <button className={styles['button']} onClick={() => loadmore()}>
            Load More User
          </button>
        </div>
        <main className={styles['main']}>
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <Usercard
                  avatar={user.results[0].picture.large}
                  location={user.results[0].location}
                  name={user.results[0].name}
                  key={user.results[0].login.uuid}
                />
              )
            })
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </StyledContainer>
    </div>
  )
}

export default App
