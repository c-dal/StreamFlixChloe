function ProgressBar({progress}) {
  return (
    <div className="progress-bar justify-contents-center">
        <div className="progress-bar-fill" style={{width:`${progress}%`}}>

        </div>
    </div>

  )
}

export default ProgressBar;