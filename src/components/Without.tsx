import Lottie from 'react-lottie'
import { kissOfTheHeart } from '../lotties'

const Without = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: kissOfTheHeart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  )
}

export default Without
