let head = (function () {
    //地址箭头变化
    adress.onmouseenter = function () {
        let arrow = this.querySelector('i');
        arrow.classList.add('icon-arrowup');
        arrow.classList.remove('icon-arrowdown');
    }
    adress.onmouseleave = function () {
        let arrow = this.querySelector('i');
        arrow.classList.remove('icon-arrowup');
        arrow.classList.add('icon-arrowdown');
    }
    //分类和商品变化
    let epets = document.querySelectorAll('.epet-type');
    
    epets[0].onmouseenter = function () {
        $(epets[1]).css({
            'background-color' : '#fff',
        }).find('a').css('color','#333');
        epets[1].classList.remove('flag');
        this.classList.add('flag');
        $(this).css('background-color',$('.lunbo')[0].style.backgroundColor);
        $('.flag>a').css('color',`#fff`);

        let arrow = this.querySelectorAll('b'),
            hiddsort = document.querySelector('.hidd-sort'),
            hiddmore = document.querySelector('.hidd-more');
        epets[1].classList.remove('flag');
      
        arrow[0].className = 'rota';
        hiddsort.style.display = 'block';
        hiddmore.style.display = 'none';
    }
    epets[0].onmouseleave = function () {
        let arrow = this.querySelectorAll('b');
        arrow[0].className = '';
    }
    epets[1].onmouseenter = function () {
        $(epets[0]).css({
            'background-color' : '#fff',
        }).find('a').css('color','#333');

        epets[0].classList.remove('flag');
        this.classList.add('flag');
        $(this).css('background-color',$('.lunbo')[0].style.backgroundColor);
        console.log($('.lunbo')[0].style.backgroundColor);
        $('.flag>a').css('color',`#fff`);


        let arrow = this.querySelectorAll('b'),
            hiddsort = document.querySelector('.hidd-sort'),
            hiddmore = document.querySelector('.hidd-more');
        arrow[0].className = 'rota';
        hiddmore.style.display = 'block';
        hiddsort.style.display = 'none';
    }
    epets[1].onmouseleave = function () {
        let arrow = this.querySelectorAll('b');
        arrow[0].className = '';
    }
    //详细分类
    let hiddmoreList = document.querySelectorAll('.hidd-more li'),
        epetsort = document.querySelectorAll('.epet-sort'),
        hiddmoreDiv = document.querySelectorAll('.mincate');
    for (let i = 0; i < hiddmoreList.length; i++) {
        hiddmoreList[i].onmouseenter = function () {
            this.className = 'check-li';
            // console.log(hiddmoreDiv[i * 2]);
            // console.log(i);
            epetsort[i].style.display = 'block';
            if (i === 0) {
                hiddmoreDiv[0].style.display = 'block';
                hiddmoreDiv[1].style.display = 'block';
            }
            hiddmoreDiv[i * 2].style.display = 'block';
            hiddmoreDiv[i * 2 + 1].style.display = 'block';
        }
        hiddmoreList[i].onmouseleave = function () {
            this.className = '';
            epetsort[i].style.display = 'none';
            hiddmoreDiv[i * 2].style.display = 'none';
            hiddmoreDiv[i * 2 + 1].style.display = 'none';
        }
    }

    return {
        init() {

        }
    }
})();
head.init();