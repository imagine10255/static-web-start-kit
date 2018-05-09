//Write something

Vue.component('scheduleMatch', {
    props: ['date', 'time', 'name1', 'name2'],
    template: `<div class="schedule-match">
                        <div class="row">
                            <div class="col-12 text-center">
                                <span class="date">{{date}}</span>
                            </div>
                            <div class="col text-center order-md-0">
                                <div class="team">
                                    <img src="./common/img/50x50.png" alt="" class="img-fluid">
                                    <div class="name">{{name1}}</div>
                                </div>
                            </div>
                            <div class="col text-center order-md-2">
                                <div class="team">
                                    <img src="./common/img/50x50.png" alt="" class="img-fluid">
                                    <div class="name">{{name2}}</div>
                                </div>
                            </div>
                            <div class="col text-center order-md-1">
                                <span class="time">{{time}}</span>
                            </div>
                        </div>
                    </div>`
});


Vue.component('lineTopChildren', {
    template: `<div class="link-line link-line-top">
                    <div class="line-horizontal-box"></div>
                    <div class="line-center"></div>
                </div>`
});

Vue.component('lineBottomChildren', {
    template: `<div class="link-line link-line-bottom">
                    <div class="line-center"></div>
                    <div class="line-horizontal-box"></div>
                </div>`
});


var app = new Vue({
    el: '#app',
    computed: {
        scheduleTopData() {
            var data = this.scheduleTop;
            return data;
        },
        scheduleBottomData() {
            //處理最後一場比賽
            var data = this.scheduleBottom;
            data.sort();
            // data.shift();
            return data;
        }
    },
    data: {
        scheduleTop: scheduleTop,
        scheduleBottom: scheduleBottom

    }
})

