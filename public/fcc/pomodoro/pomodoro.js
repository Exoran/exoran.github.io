$(function() {
  let sessionLength = 25
  let breakLength = 5
  const [notRunning, session, breakTime] = [0, 1, 2]
  let status = notRunning
  let paused = false
  let currentTime = 0

  const reset = $('.reset')
  const clock = $('.clock')
  const sessionLengthDOM = $('#sessionLength')
  const breakLengthDOM = $('#breakLength')

  const [sessMinus, sessPlus] = $('.operator')
  const [breakMinus, breakPlus] = $('.operator2')

  function pad(str) {
    str = "" + str
    return str.length > 1 ? str : "0" + str
  }

  function updateSessionLength() {
    $(sessionLengthDOM).html(pad(sessionLength))
    if (status == notRunning){
    currentTime = sessionLength * 60
    updateClock()
    }
  }

  function updateBreakLength() {
    $(breakLengthDOM).html(pad(breakLength))
  }

  $(sessMinus).on("click", function() {
    sessionLength = sessionLength > 1 ? sessionLength - 1 : 1
    updateSessionLength()
  })
  $(sessPlus).on("click", function() {
    sessionLength = sessionLength < 60 ? sessionLength + 1 : 60
    updateSessionLength()
  })

  $(breakMinus).on("click", function() {
    breakLength = breakLength > 1 ? breakLength - 1 : 1
    updateBreakLength()
  })
  $(breakPlus).on("click", function() {
    breakLength = breakLength < 60 ? breakLength + 1 : 60
    updateBreakLength()
  })

  function updateClock() {
    let sec = currentTime % 60
    let min = Math.floor(currentTime / 60)
    $(clock).html(pad(min) + " : " + pad(sec))
  }

  $('.timer').on('click', function(){
    if (status != notRunning){
    paused = !paused
    } else {
      status = session;
    }
  })
  $(reset).on('click', function(){
    reset.addClass('invisible')
    currentTime = sessionLength * 60
    status = notRunning
    paused = false
  })
  setInterval(function() {
    if(!paused){
    switch (status) {
      case notRunning:
        $("body").css("background-color", "#0D47A1")
        break
      case session:
        currentTime--
        $("body").css("background-color", "#004D40")
        if (currentTime < 1){
          currentTime = breakLength * 60
          status = breakTime
        }
        $(reset).removeClass("invisible")
        break
      case breakTime:
        $("body").css("background-color", "#212121")
        if (currentTime < 1){
          currentTime = sessionLength * 60
          status = session
        }
        currentTime--
        break
      default:
        break
    }
    }
    updateClock()
  }, 1000)


  updateSessionLength()
  updateBreakLength()
})
