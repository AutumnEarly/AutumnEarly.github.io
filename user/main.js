

(function(){
    var footerUser = document.querySelector('#footer-wrap');
    var runtime = document.createElement('div'); //计量网站建立时间
    var noteLeft = document.createElement('div'); //留言条
    var noteh3 = document.createElement('span');
    var vertical = document.createElement('span');
    vertical.innerHTML = '|';
    noteh3.id = 'sitehh1-subtitle';
    vertical.id = 'vertical-String';
    var sendWord = '为了你所喜欢的东西而奋斗吧！';
    //初始化
    window.addEventListener('DOMContentLoaded',() => {
        footerUser.appendChild(runtime);
        footerUser.appendChild(noteLeft);
        runtime.id = "runtime";
        noteLeft.innerHTML="这个网站才开始搭建，功能大部分都没有实现~";
        nowRuntime();
        subtitleTiemr(noteh3,sendWord);
    })
    window.addEventListener('load',() => {
        setTimeout(() => {
            hintText();
        },1000);
    })
    //插入的对象 文本
    function subtitleTiemr(obj,text,times = 0)
    {
        if(document.querySelector('#site-info') != null) {
            if(document.querySelector('#site-info').querySelector('#sitehh1-subtitle') === null) {
                document.querySelector('#site-info').appendChild(noteh3);
                document.querySelector('#site-info').appendChild(vertical);
            }
        }
        
        let rand = 1;
        rand = Math.random() * (text.length - text.length / 2) + 1;
        obj.timerSubtitle = setTimeout(function t() {
            obj.innerHTML += text[times];
            times++;
            subtitleTiemr(obj,text,times);
            // console.log("输出中~");
        },Math.floor(1000 / rand));
        if(times == text.length ) {
            // console.log('输出完毕~');
            clearTimeout(obj.timerSubtitle);
            vertical.innerHTML = '';
            blockFun(1); //卡住一秒
        }
    }
    //插入的对象 文本 起始值
    function callbackST(obj,text,i = 0) {
        var t = text.replace(text[i],'');
        obj.timerCallbackSt = setTimeout(() => {
            i--;
            obj.innerHTML = t;
            callbackST(obj,t,i);
            // console.log(t);
            if( i == -1) {
                clearTimeout(obj.timerCallbackSt);
                subtitleTiemr(noteh3,sendWord)
            }
        },30)

    }
    //计算时间
    function nowRuntime() {
        X = new Date("11/24/2022 21:50:00");
        Y = new Date();
        //getTime 返回自 1970 年 1 月 1 日午夜以来与指定日期的毫秒数。
        //以当前时间减去自己定义的时间
        T = (Y.getTime() - X.getTime());
        M = 24 * 60 * 60 * 1000;
        //天数
        a = T / M;
        //向上取最大值
        day = Math.floor(a);
        b = (a - day) * 24;
        hours = Math.floor(b);
        c = (b - hours) * 60;
        minute = Math.floor((b - hours) * 60);
        seconds = Math.floor((c - minute) * 60);
        runtime.innerHTML = "在崩坏生存的第: " + day + " 天 " + hours + " 小时 " + minute + " 分 " + seconds + " 秒 ";
        //回调自己
        window.times = setTimeout(nowRuntime,1000);
        //防止本地域名中跳转页面时丢失 如果页脚中没有计天数 那么就添加进去
        if(document.querySelector('#footer-wrap').querySelector('#runtime') === null)
        {
            document.querySelector('#footer-wrap').appendChild(runtime);
            document.querySelector('#footer-wrap').appendChild(noteLeft);
        }
        // console.log(document.querySelector('#footer-wrap').querySelector('#runtime'));
    }
    //中间延时函数 时间（秒）
    function blockFun(times) {
        return new Promise(reslove=> { setTimeout(() => {
            // console.log('卡住%d秒',times);
            callbackST(noteh3,sendWord,sendWord.length);
            //重调的时候重新加上
            vertical.innerHTML = '|';
        },times * 1000);});
    }
    //提示文本
    function hintText() {
        let date = new Date();
        let hours = date.getHours();

        let hint = document.createElement('div');
        hint.id = 'hint';
        
        if(hours >=6 && hours <= 10) {
            hint.innerText = '早上好啊，新的一天就从早上开始咯~';
            console.log('早上好啊，新的一天就从早上开始咯~');
        } else if(hours >=11 && hours <=13) {
            hint.innerText = '中午好啊~';
            console.log('中午好啊');
        } else if(hours >=14 && hours <=18) {
            hint.innerText = '下午好啊~';
            console.log('下午好啊');
        } else if(hours >=19 && hours < 23) {
            hint.innerText = '晚上好啊~';
            console.log('晚上好啊');
        } else {
            hint.innerText = '夜深了，早点睡吧~';
            console.log('夜深了，早点睡吧');
        }
        document.body.appendChild(hint); 
        console.log(document.querySelector('#hint'));
    }
}(document))