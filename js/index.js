let fzx = (function(){
    function tab (tabId,boxId,boxClassName){
        let nav = document.getElementById(tabId);
        let lis  = nav.getElementsByTagName('li');
        let box = document.getElementById(boxId);
        let cards = box.getElementsByClassName(boxClassName);
       
        //lis = Array.from(lis);
        for(let i = 0;i< lis.length;i++){
            lis[i].index = i;
            lis[i].onmouseover = function(){
                console.log(i);
                for(let j = 0;j<lis.length;j++){
                    lis[j].className = '';
                    cards[j].style.display = 'none';
                }
                lis[this.index].className = 'borderline';
                cards[this.index].style.display = 'block';
            }
        }
    }
    return {
        init(){
            tab('nav','item','item');
            tab('nav1','item1','item1');
        }
    }
})();
fzx.init();