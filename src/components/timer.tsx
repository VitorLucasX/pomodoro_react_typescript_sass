import { secondsToMinutes } from '../utils/seconds-to-minutes'

interface Props {
  mainTime: number
}


const Timer = (props: Props): JSX.Element => {
  return (
    <div className="timer">{secondsToMinutes(props.mainTime)}</div>
  )
}

export default Timer
