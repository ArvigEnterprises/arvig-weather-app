

class ad {
    constructor(data){
        console.log('AD CLASS');
        console.log(data);
        this.data = data;
        if(data.start !== 'false') {
            $('#innerData').removeClass('d-none');
            this.adTimer();
            this.startAdEvent(data);
        }

``}




    startAdEvent(data){
        //     this.data = data;
        // $('#innerData').removeClass('d-none');
        // if(data.start !== 'false') {
        //     console.log('+++++++++++++++++++++Start');
        //     // console.log(data);
        //     // console.log(data);
        //     // console.log(data.nextEvent.id);
        //     this.adTimer();
        // }
        // timer(eventData.loopLength);
        // console.log(data.event);
        var wrapper = $('<div class="text-center"></div>');
        console.log('________________TYPE________________');
        console.log(data.event.type);
        if(data.event.type == 'ad'){
            var iframe =$('<iframe src="'+data.event.slide+'" frameborder="0" width="1922" height="1081.13" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
            var src = iframe.attr('src');
            src = src + '&rm=minimal';
            iframe.attr('src', src);
        } else {
            var iframe =$('<video width="100%" preload="auto" autoplay>\n' +
                '  <source src="'+data.event.slide+'" type="video/mp4">\n' +
                '  Browser does not support the video tag.\n' +
                '</video>');
        }
        // var iframe = $(eventData.slide);
        // var iframe =$('<iframe src="https://drive.google.com/file/d/1VQ6B2tvunl1VqOOFZCuEsffuHf8gBP0E/preview?start=1&autoplay=1" width="640" height="480"></iframe>');
        // console.log(src);
        // console.log(src);
        // iframe = resizeIframe(iframe);
        wrapper.append(iframe);
        $('#innerData').html(wrapper);
        $('body').css('background-color', '#000');
        // $('body').html('<iframe src="'+eventData.slide+'" frameborder="0" width="1920" height="1309" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
        // $('body').html('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTsslDu8IHDbQ9RTtL1id8PsaNxitvZuKg4uADaYKBaPAUU3_G600ayLmUd2mzL0fCd-rsep2NX8PRL/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1920" height="1309" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
        //
    }

    adTimer() {
        console.log('_______________adTimer________________');
        // console.log(length);
        console.log(this.data.event);
        var adLength = this.data.event.loopLength * 1000;
        var data = this.data
        setTimeout(function () {
            console.log('End of Ad');
            // window.location.replace("live.html?id=" + data.nextEvent.id);
            window.location.replace("live.html?region=" + eventData.region + "&id=" + eventData.nextEvent.id);
        }, adLength);
    }

    resizeIframe(iframe) {
        console.log(iframe);
        var viewPortHeight = $(window).height();
        var viewPortWidth = $(window).width();

        viewPortHeight = viewPortHeight - 10;
        // var newHeight = viewPortHeight - headerHeight - 174;
        var origHeight = iframe.attr('height');
        var origWidth = iframe.attr('width');
        // var ratio = origWidth / origHeight;
        var ratio = 1.777777777777778;
        var newWidth = viewPortHeight * ratio;


        console.log('--------------VIEWPORT-----------------');
        console.log(viewPortWidth);
        console.log(viewPortHeight);
        // console.log(origHeight);
        // console.log(origWidth);
        // console.log(ratio);
        // console.log(newWidth);
        console.log('-------------------------------');
        // iframe.attr('height', viewPortHeight);
        // iframe.attr('width', newWidth);
        iframe.attr('height', 1080);
        iframe.attr('width', 1920);
        iframe.css('margin-bottom', '-10px');
        // iframe.attr(newHeight + 44);

        return iframe;

    }
}
