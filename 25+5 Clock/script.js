class App extends React.Component { 
    render() {
        const { 
            breakCount, 
            sessionCount, 
            clockCount, 
            currentTimer,
            isPlaying
        } = this.state;
        
        const breakProps = {
            title: "Break",
            count: breakCount,
            handleDecrease: this.handleBreakDecrease, 
            handleIncrease: this.handleBreakIncrease,
        }
        
        const sessionProps = {
            title: "Session",
            count: sessionCount,
            handleDecrease: this.handleSessionDecrease, 
            handleIncrease: this.handleSessionIncrease,
        }
        
        return (
            <div>
                <div className="flex">
                    <SetTimer {...breakProps} />
                    <SetTimer {...sessionProps} />
                </div> 
                
                <div className="clock-container">
                    <h1 id="timer-label">{currentTimer}</h1>
                    <span id="time-left">{this.convertToTime(clockCount)}</span>
                    
                    
                    <div className="flex">
                        <button id="start_stop"
                            onClick={this.handlePlayPause}>
                            <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
                        </button>
                        <button id="reset"
                            onClick={this.handleReset}>
                            <i className="fas fa-sync" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));