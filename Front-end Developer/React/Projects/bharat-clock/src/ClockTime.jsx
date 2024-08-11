function ClockTime(){
    let time = Date();
    return <p className="lead">This is current time: {time}
    - {time.toLocaleTimeString}
    </p>
}

export default ClockTime;