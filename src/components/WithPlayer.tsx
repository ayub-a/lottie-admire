import { Controls, Player } from '@lottiefiles/react-lottie-player'

const WithPlayer = () => {
  return (
    <Player
      autoplay
      loop
      src='https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json'
      style={{ height: '300px', width: '300px' }}>
      <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug', '']} />
    </Player>
  )
}

export default WithPlayer
