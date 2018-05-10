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
                                    <img src="./common/img/team.gif" alt="" class="img-fluid">
                                    <div class="name">{{name1}}</div>
                                </div>
                            </div>
                            <div class="col text-center order-md-2">
                                <div class="team">
                                    <img src="./common/img/team.gif" alt="" class="img-fluid">
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
Vue.component('lineCenterChildren', {
    template: `<div class="link-line link-line-bottom">
                    <div class="line-center"></div>
                </div>`
});


var app = new Vue({
    el: '#app',
    methods: {
        formatSchedule(sourceDataSchedule,orderBy) {
            var dataSchedule1 = [];
            var dataSchedule2 = [];
            var dataSchedule3 = [];

            sourceDataSchedule.forEach(function (row1) {
                console.log('row1.row', row1.row);
                dataSchedule1.push(row1.row);

                row1.child.forEach(function (row2) {
                    console.log('row2.row', row2.row)
                    dataSchedule2.push(row2.row)

                    row2.child.forEach(function (row3) {
                        dataSchedule3.push(row3.row)
                    });
                });
            });

            if(orderBy === 'desc'){
                return [dataSchedule3, dataSchedule2, dataSchedule1];
            }else{
                return [dataSchedule1, dataSchedule2, dataSchedule3];
            }
        }
    },
    computed: {
        scheduleTopData() {
            return this.formatSchedule(this.scheduleTop,'desc');
        },
        scheduleBottomData() {
            return this.formatSchedule(this.scheduleBottom,'asc');
        },
    },
    data: {
        scheduleTop: scheduleTop,
        scheduleBottom: scheduleBottom,
        scheduleCenter: scheduleCenter,
        scheduleCenterSelf: scheduleCenterSelf

    }
})

