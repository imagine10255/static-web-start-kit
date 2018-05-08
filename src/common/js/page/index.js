//Write something

Vue.component('scheduleMatch', {
    template: `<div class="schedule-match">
                        <div class="row">
                            <div class="col-12 text-center">
                                <span class="date">30 Jun</span>
                            </div>
                            <div class="col text-center order-md-0">
                                <div class="team">
                                    <img src="./common/img/50x50.png" alt="" class="img-fluid">
                                    <div class="name">Saudi Arabia</div>
                                </div>
                            </div>
                            <div class="col text-center order-md-2">
                                <div class="team">
                                    <img src="./common/img/50x50.png" alt="" class="img-fluid">
                                    <div class="name">Saudi Arabia</div>
                                </div>
                            </div>
                            <div class="col text-center order-md-1">
                                <span class="time">21:00</span>
                            </div>
                        </div>
                    </div>`
})


Vue.component('lineChildren', {
    template: `<div class="link-line">
                    <div class="line-horizontal-box"></div>
                    <div class="line-center"></div>
                </div>`
})


var worldCupSchedule = new Vue({
    el: '#world-cup-schedule',
    data: {
        schedule: [
            {
                'date':'30 Jun',
                'time':'09:00',
                'name':'Saudi Arabia',
            },
            {
                'date':'30 Jun',
                'time':'09:00',
                'name':'Saudi Arabia',
            },
        ]
    }
})

