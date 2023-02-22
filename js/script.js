new Vue({
    el:'.wrapper',
    data:{
        elHidden: '-40vw',
        stick1: 'rotate(0deg)',
        stick2: 'translate(0 0)',
        stick3: 'rotate(0deg)',
    },
    methods:{
        burgerOnClick: function(){
            if(this.elHidden == '-40vw'){
                this.elHidden = '7vw'
                this.stick1 = 'rotate(45deg)'
                this.stick2 = 'translate(5.4vw)'
                this.stick3 = 'rotate(-45deg)'
            }
            else{
                this.elHidden = '-40vw'
                this.stick1 = 'rotate(0deg)'
                this.stick2 = 'translate(0)'
                this.stick3 = 'rotate(0deg)'
            }
        },
        onClick_h1: function(){
            document.querySelector('.section:nth-child(1)').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h2: function(){
            document.querySelector('.section:nth-child(1) .article:nth-child(2) .article__items .article__element:nth-child(2) span').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h3: function(){
            document.querySelector('.section:nth-child(2) .article:nth-child(1) .article__items').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h4: function(){
            document.querySelector('.section:nth-child(2) .article:nth-child(3)').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h5: function(){
            document.querySelector('.section:nth-child(2) .article:nth-child(4)').scrollIntoView({
                behavior: 'smooth',
            })
        },
    },
})

function calcNum() {
        time = 5000
    let num_1 = 0
    let t1 = time/num_1
    a1 = Math.round(258/100)
    let interval_1 = setInterval(() => {
        num_1+=a1
        document.querySelector('#num_1').innerHTML = num_1+'+'
        if (num_1 > 257) {
            clearInterval(interval_1)
        }
    }, t1);

    let num_2 = 0
    let t2 = time/num_2
    a2 = Math.round(590/100)
    let interval_2 = setInterval(() => {
        num_2+=a2
        document.querySelector('#num_2').innerHTML = num_2+'k'
        if (num_2 > 589) {
            clearInterval(interval_2)
        }
    }, t2);

    let num_3 = 0
    let t3 = time/num_3
    a3 = Math.round(190/100)

    let interval_3 = setInterval(() => {
        num_3+=a3
        document.querySelector('#num_3').innerHTML = num_3+'+'
        if (num_3 > 17) {
            clearInterval(interval_3)
        }
    }, t3);
}
if (window.innerWidth > 1000) {
    var b = false
    window.addEventListener('scroll', function (){
        if (window.pageYOffset > 100 && !b) {
            calcNum()
            b = true
        }
    }) 
}else{
    calcNum()
}
