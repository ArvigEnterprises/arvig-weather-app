var currentLoop = 0;
function moveItem() {
    var firstTime = totalTime * .075;
    var nextTab = $('#weatherWidget nav .nav-item.active').next('.nav-item');
    console.log('--------------------- MOVE ITEM ---------------------');
    console.log(totalTime);
    console.log(nextTab.length);
    console.log(firstTime);
    if (nextTab.length) {
        nextTab.trigger('click');
        // console.log('clicked');
        setTimeout(moveItem, firstTime);
    } else {
        // clearInterval(loopTabs);
        radarAnimation();
        // console.log('clear');
    }
    // console.log(nextTab);
    // console.log('did something');
}


function forecastAnimation() {
    // console.log('--------------------- FORECAST ---------------------');
    // console.log(totalTime);
    // var firstTime = totalTime * .075;
    // console.log(firstTime);
    moveItem();
    // setTimeout( function () {
    //     loopTabs = setInterval(this.moveItem, firstTime);
    // }, firstTime);
}


function radarAnimation() {
    var firstTime = totalTime * .25;
    $('#nav-tab-test-2').trigger('click');
    setTimeout(
        function () {
            // console.log(currentLoop);
            console.log('End of loops');
            console.log(eventData.nextEvent);
            console.log("live.html?id=" + eventData.nextEvent.id);
            window.location.replace("live.html?region=" + eventData.region + "&id=" + eventData.nextEvent.id);
            //wait for tabs then go
        }, firstTime);
}


function todayAnimation(setTime) {
    console.log('TODAY ANIMATION');
    console.log(setTime);
    totalTime = setTime;
    //     console.log('--------------------- TODAY ---------------------');
    // console.log(totalTime);
    var firstTime = totalTime * .30;
    // console.log(firstTime);
    setTimeout(function () {
        // this.moveItem(totalTime);
        forecastAnimation(totalTime);
        // console.log('started');
    }, firstTime);
}

class EventData {

    constructor(value) {
        // var test = new weatherClass();
        this.start = value.start;

        // if(value.region){
            this.region = value.region ? value.region : 'north';
        // } else {
        //     return false;
        // }

        console.log(this);
            if(value.id){
                this.getEventData(value.id);
            } else if(value.zip){
                this.searchValue = value.zip;
                this.getGeo(getPoints);
                if(this.start !== 'false') {
                    console.log('ANIMATION STARTED');
                    todayAnimation(value.loopLength * 1000);
                    // timer(value.loopLength);
                }
            } else {
                // adTimer(value.loopLength * value.loops);
                // timer(value.loopLength);
                this.getFirstEvent();

            }
            this.lat = 'sdfsdf';
            this.lon = 'dddddddd';
        // this.currentEvent();
        // getCurrentDay();
        // this.getPoints()
    }

    // sayHi() {
    //     alert(this.searchValue);
    // }

    // getGeo(callback = null) {
    //
    //     var eventData = this;
    //     $.ajax({
    //         url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine='+ this.searchValue +'&outFields=Match_addr,Addr_type',
    //         success: function (data) {
    //             // console.log(data);
    //             var location = data.candidates[0].location;
    //             eventData.lat = location.x;
    //             eventData.lon = location.y;
    //             addRadar(location.x, location.y);
    //             if(callback){
    //                 callback(location.x, location.y);
    //             }
    //         },
    //         error: function () {
    //             // $('#output').html('Bummer: there was an error!');
    //         },
    //     });
    // }

    getEventData(id){
        var eventData = this;
        firebase
            .database()
            .ref()
            .child('/events/' + eventData.region + '/' + id)
            .once('value', function (snapshot) {
                var data = snapshot.val();
                if(data.id == '' || !data.id){
                    data.id = snapshot.key;
                }
                eventData.event = data;
                eventData.searchValue = data.zip;
                eventData.getNextEvent(data.order);
                if(data.zip){
                    // eventData.getGeo(getPoints);
                    var currentEvent = new weather(eventData);
                    todayAnimation(data.loopLength * 1000);
                    // weatherClass.getCurrentDay();
                    // eventData.startWeatherEvent(data.loopLength)
                } else {
                    console.log('!!!!!!!!!!!!!!!!!!!!!!DATA!!!!!!!!!!!!!')
                    console.log(eventData)
                    var currentEvent = new ad(eventData);
                    // eventData.startAdEvent(data);
                }
                if(data.start !== 'false') {
            console.log('+++++++++++++++++++++Start');
            console.log(data.start);
                    // eventData.timer(data.loopLength);
                }
            });
        return this.event;
    }


    getNextEvent(order){
        var eventData = this;
        // console.log(eventData.event);
        firebase
            .database()
            .ref()
            .child('/events/' + eventData.region + '/')
            .orderByChild('order')
            .startAt(order + 1)
            .limitToFirst(1)
            .once('value', function (snapshot) {
                if(snapshot.val() !== null){
                    snapshot.forEach(function (index) {
                        var data = index.val();
                        if(data.id == '' || !data.id){
                            data.id = index.key;
                        }
                    console.log('TEST-TEST-TEST-TEST-TEST');
                    console.log(index.key);
                    console.log(index.val());
                    console.log(data);
                    console.log('TEST-TEST-TEST-TEST-TEST');
                    eventData.nextEvent = data;
                    console.log('_______________NEXT EVENT________________');
                    console.log(index.val());
                    });
                }else{
                    console.log('----------------------------last Event')
                    firebase
                        .database()
                        .ref()
                        .child('/events/' + eventData.region + '/')
                        .orderByChild('order')
                        .startAt(0)
                        .limitToFirst(1)
                        .once('value', function (snapshot) {
                            if(snapshot.val() !== null) {
                                snapshot.forEach(function (index) {
                                    var data = index.val();
                                    if(data.id == '' || !data.id){
                                        eventData.id = index.key;
                                    }
                                    // console.log('TEST-TEST-TEST-TEST-TEST');
                                    // console.log(index.key);
                                    // console.log(index.val());
                                    // console.log('TEST-TEST-TEST-TEST-TEST');
                                    eventData.nextEvent = data;
                                    console.log('_______________NEXT EVENT________________');
                                    console.log(data);
                                });
                            }
                        });
                    // this.getFirstEvent();
                }

            });
        return this.nextEvent;
    }
    getFirstEvent(){
        var eventData = this;
        // console.log(eventData.event);
        firebase
            .database()
            .ref()
            .child('/events/' + eventData.region + '/')
            .orderByChild('order')
            .startAt(0)
            .limitToFirst(1)
            .once('value', function (snapshot) {
                snapshot.forEach(function (index) {
                    var data = index.val();
                        console.log('GET EVENT DATA');
                        console.log(data);
                    if(data.id == '' || !data.id){
                        data.id = index.key;
                    }
                    eventData.event = data;
                    eventData.searchValue = data.zip;
                    eventData.getNextEvent(data.order);
                    if(data.zip){
                        // eventData.getGeo(getPoints);
                        // todayAnimation(snapshot.val().loopLength * 1000);
                        // eventData.startWeatherEvent(index.val().loopLength)
                        var currentEvent = new weather(eventData);
                        todayAnimation(data.loopLength * 1000);
                    } else {
                        var currentEvent = new ad(eventData);
                        // eventData.startAdEvent(index.val());
                    }
                    if(eventData.start !== 'false') {
                        console.log('+++++++++++++++++++++Start');
                        console.log(eventData.start);
                        // eventData.timer(index.val().loopLength);
                    }

                });
            });

        return this.event;
    }

    startWeatherEvent(loopLength){
        eventData.getGeo(getPoints);
        $('#innerData').removeClass('d-none');
        if(eventData.start !== 'false') {
            console.log('+++++++++++++++++++++Start');
            console.log(eventData.start);
            todayAnimation(loopLength * 1000);
        }
    }

    startAdEvent(eventData){
        $('#innerData').removeClass('d-none');
        if(eventData.start !== 'false') {
            console.log('+++++++++++++++++++++Start');
            console.log(eventData.start);
            adTimer(eventData.loopLength);
        }
        // timer(eventData.loopLength);
        console.log(eventData.slide);
        // var iframe = $(eventData.slide);
        var iframe =$('<iframe src="'+eventData.slide+'" frameborder="0" width="1922" height="1081.13" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
        var src = iframe.attr('src');
        console.log(src);
        src = src + '&rm=minimal';
        console.log(src);
        iframe.attr('src', src);
        var wrapper = $('<div class="text-center"></div>');
        // iframe = resizeIframe(iframe);
        wrapper.append(iframe);
        $('#innerData').html(wrapper);
        $('body').css('background-color', '#000');
        // $('body').html('<iframe src="'+eventData.slide+'" frameborder="0" width="1920" height="1309" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
        // $('body').html('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTsslDu8IHDbQ9RTtL1id8PsaNxitvZuKg4uADaYKBaPAUU3_G600ayLmUd2mzL0fCd-rsep2NX8PRL/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1920" height="1309" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
        //
    }
    timer(loopLength) {
        setInterval(function () {
            var mls = count * 1000;
            var interval = loopLength * 1000;
            if (mls >= (interval * 1)) {
                $('#slideNumber').text('END');
            } else if (mls >= (interval * .75)) {
                $('#slideNumber').text('8');

            } else if (mls >= (interval * .675)) {
                $('#slideNumber').text('7');

            } else if (mls >= (interval * .60)) {
                $('#slideNumber').text('6');

            } else if (mls >= (interval * .525)) {
                $('#slideNumber').text('5');

            } else if (mls >= (interval * .45)) {
                $('#slideNumber').text('4');

            } else if (mls >= (interval * .375)) {
                $('#slideNumber').text('3');

            } else if (mls >= (interval * .30)) {
                $('#slideNumber').text('2');

            }
            $('#timer').text(count);
            count++;

        }, 1000);
    }

}



