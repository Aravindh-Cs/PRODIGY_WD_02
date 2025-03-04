
function dateTime()
{
    let apm = document.querySelector('.apm')
    const datefunc = new Date()
    let hr = padZero(datefunc.getHours())
    let min = padZero(datefunc.getMinutes())
    let sec = datefunc.getSeconds()
    let dt = padZero(datefunc.getDate())
    let mon = padZero(datefunc.getMonth()+1)
    let yr = padZero(datefunc.getFullYear())
    if(hr>12)
    {
        hr=hr-12
        apm.innerHTML="PM"
    }else if(hr==0)
    {
        hr=12
    }else
    {
        apm.innerHTML="AM"
    }
    document.querySelector('.hr').innerHTML=padZero(hr)
    document.querySelector('.min').innerHTML=padZero(min)
    document.querySelector('.sec').innerHTML=padZero(sec)

    document.querySelector('.dte').innerHTML=dt
    document.querySelector('.mon').innerHTML=mon
    document.querySelector('.yr').innerHTML=padZero(yr)
    
}
setInterval(()=>{dateTime()},1000)
function padZero(num)
{
    return num<10?'0'+num:num;
}

let startbtn = document.querySelector('.start')
let stopbtn = document.querySelector('.stop')
let resetbtn = document.querySelector('.reset')

let hrs=0,mins=0,secs=0,ms=0,startTimer
function stopwatch()
{
    let thr = hrs<10?'0'+hrs:hrs;
    let tmin = mins<10?'0'+mins:mins;
    let tsec = secs<10?'0'+secs:secs;
    let tms = ms<10?'0'+ms:ms;

    document.querySelector('.whr').innerHTML=thr
    document.querySelector('.wmin').innerHTML=tmin
    document.querySelector('.wsec').innerHTML=tsec
    document.querySelector('.wms').innerHTML=tms
    console.log(tms)
}
function start()
{
    startTimer = setInterval(()=>
    {
    ms++;
    if(ms==100)
    {
        ms=0;
        secs++;
    }
    if(secs==60)
    {
        secs=0;
        mins++;
    }
    if(mins==60)
    {
        mins=0;
        hrs++;
    }
stopwatch();
},10)
}
function stop()
{
    clearInterval(startTimer)
    stopwatch()
}
function reset()
{
    hrs=0,mins=0,secs=0,ms=0
    clearInterval(startTimer)
    stopwatch()
}