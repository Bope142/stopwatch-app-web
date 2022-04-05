let TimeId;
const min = document.querySelector('.min');
const hours = document.querySelector('.hours');
const GetstorageUserTime = () => {
    let times = localStorage.getItem('timeWatch')
    if (times == null) {
        localStorage.setItem('timeWatch', '00:00:00:00')
        times = localStorage.getItem('timeWatch')
        let arrayTimes = times.split(':');
        arrayTimes.forEach((tm, index) => document.querySelectorAll('.compteur__value')[index].innerHTML = tm)
    } else {
        times = localStorage.getItem('timeWatch')
        let arrayTimes = times.split(':');
        arrayTimes.forEach((tm, index) => document.querySelectorAll('.compteur__value')[index].innerHTML = tm)
    }
}
const resetStorageUserTime = () => {
    const times = localStorage.getItem('timeWatch')
    localStorage.setItem('timeWatch', '00:00:00:00')
}
const SetStorageUserTime = (times) => {
    localStorage.setItem('timeWatch', times)
}
const modal = () => {
    document.querySelector('.exit').addEventListener('click', () => {
        document.querySelector('.modal-about').classList.remove('modal-visible')
    })
    document.querySelector('#about-app').addEventListener('click', () => {
        document.querySelector('.modal-about').classList.add('modal-visible')
    })
}
const resteWatch = () => {
    document.querySelector('#reset-watch').addEventListener('click', () => {
        document.querySelector('#control').classList.replace('btn-stop', 'btn-play')
        clearInterval(TimeId)
        document.querySelector('#control').innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8,5v14l11-7L8,5z" fill="#FFFFFF" />
                </svg>`
        document.querySelector('.hr').innerHTML = '00'
        document.querySelector('.min').innerHTML = '00'
        document.querySelector('.sec').innerHTML = '00'
        document.querySelector('.milsec').innerHTML = '00'
        resetStorageUserTime()
    })
}
const control = () => {

    document.querySelector('#control').addEventListener('click', () => {
        if (document.querySelector('#control').classList.contains('btn-play')) {
            document.querySelector('#control').classList.replace('btn-play', 'btn-stop')
            TimeId = setInterval(time, 1);

            document.querySelector('#control').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M6 5L6 19L10 19L10 5L6 5 z M 14 5L14 19L18 19L18 5L14 5 z" fill="#FFFFFF" />
</svg>`
        } else {
            document.querySelector('#control').classList.replace('btn-stop', 'btn-play')
            clearInterval(TimeId)
            document.querySelector('#control').innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8,5v14l11-7L8,5z" fill="#FFFFFF" />
                </svg>`
            SetStorageUserTime(document.querySelector('.hr').textContent + ':' + document.querySelector('.min').textContent + ':' + document.querySelector('.sec').textContent + ':' + document.querySelector('.milsec').textContent)
        }
    })
}

const time = () => {
    let milsec, min, hr, sec;
    milsec = parseInt(document.querySelector('.milsec').innerHTML);
    if (milsec < 60) {
        milsec++;

        if (milsec.toString().length == 1) {
            document.querySelector('.milsec').innerHTML = "0" + milsec;
        } else {
            document.querySelector('.milsec').innerHTML = milsec;
        }

    } else {
        document.querySelector('.milsec').innerHTML = "00";
        sec = parseInt(document.querySelector('.sec').innerHTML);
        if (sec < 60) {
            sec++;

            if (sec.toString().length == 1) {
                document.querySelector('.sec').innerHTML = "0" + sec;
            } else {
                document.querySelector('.sec').innerHTML = sec;
            }
        } else {
            document.querySelector('.sec').innerHTML = "00";
            min = parseInt(document.querySelector('.min').innerHTML);
            if (min < 60) {
                min++;

                if (min.toString().length == 1) {
                    document.querySelector('.min').innerHTML = "0" + min;
                } else {
                    document.querySelector('.min').innerHTML = min;
                }
            } else {
                document.querySelector('.min').innerHTML = "00";
                hr = parseInt(document.querySelector('.hr').innerHTML);
                hr++;
                if (hr.toString().length == 1) {
                    document.querySelector('.hr').innerHTML = "0" + hr;
                } else {
                    document.querySelector('.hr').innerHTML = hr;
                }

            }
        }

    }
}
window.addEventListener('load', () => {
    control()
    resteWatch()
    modal()
    GetstorageUserTime()

})

window.addEventListener('unload', () => {
    SetStorageUserTime(document.querySelector('.hr').textContent + ':' + document.querySelector('.min').textContent + ':' + document.querySelector('.sec').textContent + ':' + document.querySelector('.milsec').textContent)
})
