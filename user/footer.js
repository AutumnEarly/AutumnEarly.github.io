
(function(){
    var footerUser = document.querySelector('#footer-wrap');
    var runtime = document.createElement('div'); //计量网站建立时间
    var noteLeft = document.createElement('div'); //留言条
    runtime.id = "runtime";
    noteLeft.innerHTML="这个网站才开始搭建，功能大部分都没有实现~";
    //初始化
    window.addEventListener('DOMContentLoaded',() => {
        footerUser.appendChild(runtime);
        footerUser.appendChild(noteLeft);
        nowRuntime();
    })

    console.log(footerUser);
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

}(document))