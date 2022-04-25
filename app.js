var models = [
    {
        name: 'Honda Hr-V-111',
        image: './images/honda111.jpg',
        link: 'http://www.arabalar.com.tr/honda/hr-v'
    },

    {
        name: 'Skoda Fabia',
        image: './images/fabia111.jpg',
        link: 'http://www.arabalar.com.tr/skoda/fabia'
    },

    {
        name: 'Nissan Qasghai',
        image: './images/qasghai111.jpg',
        link: 'http://www.arabalar.com.tr/nissan/qashqai'
    },

    {
        name: 'Volkswagen T-roc',
        image: './images/vwTroc111.jpg',
        link: 'http://www.arabalar.com.tr/volkswagen/t-roc'
    }


]


var index = 0
var slideCount = models.length
var interval

var settings = {
    duration: '1000',
    random: true
}

init(settings)

document.querySelector('.fa-circle-arrow-left').addEventListener('click', function () {
    index--
    showSlide(index)
})

document.querySelector('.fa-circle-arrow-right').addEventListener('click', function () {
    index++
    showSlide(index)
})


// ikonlara event ekleme
document.querySelectorAll('.arrw').forEach(function (item) {
    // clear interval ile mause ikonlara gelince set intervali durdurma
    item.addEventListener('mouseenter', function () {
        clearInterval(interval)
    })
})


document.querySelectorAll('.arrw').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings)
    })
})


// set interval ile belirttiğimiz süre kadar slayt çalışıyor
function init(settings) {
    // aynı sayının üretilmesini engellemek
    var prev

    interval = setInterval(function () {
        if (settings.random) {
            // random index
            do {
                index = Math.floor(Math.random() * slideCount)
            } while (index == prev)
            prev = index

        } else {
            // artan index
            if (slideCount == index + 1) {
                index = -1
            }
            showSlide(index)
            console.log(index)
            index++
        }

        showSlide(index)

    }, settings.duration)


}



function showSlide(i) {

    index = i

    if (i < 0) {
        index = slideCount - 1
    }
    if (i >= slideCount) {
        index = 0
    }

    document.querySelector('.card-title').textContent = models[index].name

    document.querySelector('.card-img-top').setAttribute('src', models[index].image)

    document.querySelector('.card-link').setAttribute('href', models[index].link)

}
