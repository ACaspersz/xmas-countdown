import React, {Fragment} from 'react';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  const isItFinished = () => {
    timerDays === 0 && timerHours === 0 && timerMinutes === 0 timerSeconds === 0 ? true : false;
  }
  return <Fragment>
    <section className="timer-container">
      <section className="timer">
        <div className="clock">
          <section>
            <p>{timerDays}</p>
            <small>Days</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <small>Hours</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <small>Minutes</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <small>Seconds</small>
          </section>
        </div>
      </section>
      { timerDays === 0 && timerHours === 0 && timerMinutes === 0 && timerSeconds === 0 ? <h3 ><span className="subtitle animated bounce">hope your christmas dreams come true ❤️</span></h3> : <h3><span className="subtitle animated bounce">until FF Xmas adventure</span></h3>}
    </section>
  </Fragment>
}

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;
