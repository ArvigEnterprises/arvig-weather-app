        var totalTime = 120000;
class weather {
    constructor(data){

        this.currentLoop = 1;
        this.weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.abbr = {
            "Sunday": "SUN",
            "Monday": "MON",
            "Tuesday": "TUE",
            "Wednesday": "WED",
            "Thursday": "THUR",
            "Friday": "FRI",
            "Saturday": "SAT"
        };
        this.icons = {
            "day": {
                "skc": {
                    "description": "Fair/clear",
                    "day": {
                        "faIcon": "<i class=\"fas fa-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-moon \"></i>"
                    }
                },
                "few": {
                    "description": "A few clouds",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i>"
                    }
                },
                "sct": {
                    "description": "Partly cloudy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "bkn": {
                    "description": "Mostly cloudy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i>"
                    }
                },
                "ovc": {
                    "description": "Overcast",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i>"
                    }
                },
                "wind_skc": {
                    "description": "Fair/clear and windy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-moon \"></i>"
                    }
                },
                "wind_few": {
                    "description": "A few clouds and windy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i><i class=\"fas fa-wind\"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i><i class=\"fas fa-wind\"></i>"
                    }
                },
                "wind_sct": {
                    "description": "Partly cloudy and windy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i><i class=\"fas fa-wind\"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i><i class=\"fas fa-wind\"></i>"
                    }
                },
                "wind_bkn": {
                    "description": "Mostly cloudy and windy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i><i class=\"fas fa-wind\"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i><i class=\"fas fa-wind\"></i>"
                    }
                },
                "wind_ovc": {
                    "description": "Overcast and windy",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i><i class=\"fas fa-wind\"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud \"></i><i class=\"fas fa-wind\"></i>"
                    }
                },
                "snow": {
                    "description": "Snow",
                    "day": {
                        "faIcon": "<i class=\"far fa-snowflake\"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"far fa-snowflake\"></i>"
                    }
                },
                "rain_snow": {
                    "description": "Rain/snow",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "rain_sleet": {
                    "description": "Rain/sleet",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "snow_sleet": {
                    "description": "Rain/sleet",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "fzra": {
                    "description": "Freezing rain",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "rain_fzra": {
                    "description": "Rain/freezing rain",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "snow_fzra": {
                    "description": "Freezing rain/snow",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "sleet": {
                    "description": "Sleet",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "rain": {
                    "description": "Rain",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "rain_showers": {
                    "description": "Rain showers (high cloud cover)",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "rain_showers_hi": {
                    "description": "Rain showers (low cloud cover)",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "tsra": {
                    "description": "Thunderstorm (high cloud cover)",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "tsra_sct": {
                    "description": "Thunderstorm (medium cloud cover)",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "tsra_hi": {
                    "description": "Thunderstorm (low cloud cover)",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "tornado": {
                    "description": "Tornado",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "hurricane": {
                    "description": "Hurricane conditions",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "tropical_storm": {
                    "description": "Tropical storm conditions",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "dust": {
                    "description": "Dust",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "smoke": {
                    "description": "Smoke",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "haze": {
                    "description": "Haze",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "hot": {
                    "description": "Hot",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "cold": {
                    "description": "Cold",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "blizzard": {
                    "description": "Blizzard",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                },
                "fog": {
                    "description": "Fog/mist",
                    "day": {
                        "faIcon": "<i class=\"fas fa-cloud-sun \"></i>"
                    },
                    "night": {
                        "faIcon": "<i class=\"fas fa-cloud-moon \"></i>"
                    }
                }
            }
        };

        this.windDirIcons = {
            "N": "0deg",
            "NNE": "23deg",
            "NE": "45deg",
            "ENE": "68deg",
            "E": "90deg",
            "ESE": "113deg",
            "SE": "135deg",
            "SSE": "158deg",
            "S": "180deg",
            "SSW": "203deg",
            "SW": "225deg",
            "WSW": "248deg",
            "W": "270deg",
            "WNW": "293deg",
            "NW": "315deg",
            "NNW": "338deg",
        };
        this.tabData = [];
        this.searchValue = data.searchValue;
        this.getCurrentDay();
        this.getGeo();
        $('#innerData').removeClass('d-none');
        if(data.start !== 'false') {
            console.log('+++++++++++++++++++++Start');
            console.log(data.start);
            // this.todayAnimation(data.event.loopLength * 1000);

        }

    }

    getGeo(callback = null) {

        var thisClass = this;
        $.ajax({
            url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine='+ thisClass.searchValue +'&outFields=Match_addr,Addr_type',
            // url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=&outFields=Match_addr,Addr_type',
            success: function (data) {
                console.log(data);
                try{
                    var location = data.candidates[0].location;
                    thisClass.lat = location.x;
                    thisClass.lon = location.y;
                    thisClass.addRadar(location.x, location.y);
                    thisClass.getPoints(location.x, location.y);
                } catch (e) {
                    console.log(e);
                }
            },
            error: function (error) {
                console.log(error);
                // $('#output').html('Bummer: there was an error!');
            },
        });
    }

    getCurrentDay() {
        var a = new Date();
        this.abbr['Today'] = this.abbr[this.weekday[a.getDay()]];

        // console.log('----------------------------ABBR-------------------------------------');
        // console.log(abbr);
        // console.log('---------------------------------------------------------------------');
        return;

    }

//


    getPoints(lat, lon) {
        var thisClass = this;
        console.log('_____________________WEATHER______________________');
        console.log(thisClass.searchValue);
        // alert(this);
        $.ajax({
            // url: 'https://api.weather.gov/points/,',
            url: 'https://api.weather.gov/points/' + lon + ',' + lat,
            success: function (data) {
                console.log('------------------getPoints--------------------------');
                console.log(data);
                $('#currentCity').text(data.properties.relativeLocation.properties.city + ', ' + data.properties.relativeLocation.properties.state)
                thisClass.getForecastData(data.properties.forecast);
                thisClass.getForecastHrData(data.properties.forecastHourly);


                // return data.properties.;
                // getForecastData(data.properties.forecast);
                // getForecastHrData(data.properties.forecastHourly);
                // getForcast(data.properties.forecastGridData);

            },
            error: function () {
                // $('#output').html('Bummer: there was an error!');
            },
        });
    };


    getForecastHrData(url) {
        var thisClass = this;
        $.ajax({
            url: url,
            success: function (data) {
                console.log('------------------getForecastHrData--------------------------');
                console.log(data);
                $('#currentForecast').text(data.properties.periods[0].shortForecast);
                $('#currentTemp').text(data.properties.periods[0].temperature);
                var icon = thisClass.getIcon(data.properties.periods[0].icon, data.properties.periods[0].isDaytime, 'text-view-9');
                $('#currentIcon').html(icon);
                var dayKey = 0;
                var currentDayName = thisClass.getDayName(new Date());
                $.each(data.properties.periods, function (key, data) {

                    var currentDate = new Date(data.startTime);
                    var forecastDate = new Date(data.startTime);
                    if (currentDayName != thisClass.getDayName(data.startTime)) {
                        currentDayName = thisClass.getDayName(data.startTime)
                        dayKey++;
                    }
                    if (dayKey < 7) {
                        // console.log(this.getDayName(data.startTime));
                        // console.log(dayKey);
                        var currentArray = thisClass.tabData[dayKey];
                        // console.log(currentArray.forecast);
                        currentArray.forecast.push(data);

                    }
                });
                // console.log(thisClass.tabData);
                thisClass.buildTabs(thisClass.tabData);
                // icon = $(icon);
                // icon.addClass('text-view-9');
                // $('#currentIcon').find('i').addClass('text-view-9');
                // buildTabInnerContent(thisClass.tabData);
                // buildTabInnerContent(data.properties.periods);
                // $('#currentForecast').text(data.properties.periods[0].shortForecast);
            },
            error: function () {
                // $('#output').html('Bummer: there was an error!');
            },
        });
    };


    getForecastData(url) {
        var thisClass = this;
        $.ajax({
            url: url,
            success: function (data) {
                console.log('------------------getForecastData--------------------------');
                console.log(data);
                var countin2 = 0;
                var keyCount = 0;
                // var newData = [];
                $.each(data.properties.periods, function (key, data) {
                    var currentDate = new Date(data.startTime);
                    // // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
                    if (countin2 % 2 === 0) {
                        // console.log('11111111111');
                        thisClass.tabData[keyCount] = {};
                        thisClass.tabData[keyCount]['name'] = thisClass.getDayName(data.startTime);
                        // newData[data.number]['name'] = abbr[data.name];
                        thisClass.tabData[keyCount]['high'] = data.temperature;
                        thisClass.tabData[keyCount]['icon'] = thisClass.getIcon(data.icon, data.isDaytime, "lg");
                        thisClass.tabData[keyCount]['windDirection'] = data.windDirection;
                        thisClass.tabData[keyCount]['windSpeed'] = data.windSpeed;
                        thisClass.tabData[keyCount]['forecast'] = [];
                    } else {
                        var newNumber = key - 1;
                        thisClass.tabData[keyCount]['low'] = data.temperature;
                        keyCount++;
                    }
                    // console.log(thisClass.tabData);
                    // console.log(data);
                    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
                    countin2++;
                });
                $('#currentForecast').text(data.properties.periods[0].shortForecast);
                $('#currentTemp').text(thisClass.tabData[0].temperature);
                $('#currentHigh').text(thisClass.tabData[0].high);
                $('#currentLow').text(thisClass.tabData[0].low);
                $('#currentWind').html(thisClass.tabData[0].windSpeed.replace('mph', '') + thisClass.windDirIcon(thisClass.tabData[0].windDirection));
                var icon = thisClass.getIcon(data.properties.periods[0].icon, data.properties.periods[0].isDaytime, 'text-view-9');
                // icon = $(icon);
                // icon.addClass('text-view-9');
                $('#currentIcon').html(icon);
                // $('#currentIcon').find('i').addClass('text-view-9');
                // buildTabs(thisClass.tabData);
                // buildTabs(data.properties.periods);
                // $('#currentForecast').text(data.properties.periods[0].shortForecast);
            },
            error: function () {
                // $('#output').html('Bummer: there was an error!');
            },
        });
    };


    buildTabs(forecast) {
        var thisClass = this;
        // alert(forecast);
        var tab = '';
        var tabContent = '';
        var currentTemp = 0;
        var hrCount = 0;
        var dayCount = 0;
        $('#nav-tabContent').html('');
        var currentDate = 0;
        // console.log(forecast)
        $.each(forecast, function (key, info) {
            // console.log(key);
            // console.log(info);
            // var newDate = new Date(info.endTime);
            // if(currentDate !== newDate.getDate() ){
            //     hrCount = 0;
            // if(key % 2 === 0  ) {

            // currentDate = newDate.getDate();
            // if(dayCount == 0 ){
            //
            // }
            // console.log(date);
            // console.log(info);
            var active = (dayCount == 0) ? "active" : "";
            var show = (dayCount == 0) ? "show" : "";
            tab += '<div class="nav-item nav-link seven-cols pr-0 pl-0 ' + active + '" id="nav-' + dayCount + '-tab" data-toggle="tab"\n' +
                '                             href="#nav-' + dayCount + '" role="tab" aria-controls="nav-' + dayCount + '" aria-selected="true">\n' +
                '                            <div class="col-12 pl-0 pr-0">\n' +
                '                                <h1>' + thisClass.abbr[info.name] + '</h1>\n' +
                '                            </div>\n' +
                '                            <div class="col-12 pl-0 pr-0">\n' + info.icon +
                '                            </div>\n' +
                '                            <div class="col-12 pl-0 pr-0">\n' +
                '                                ' + info.high + '<span>&#176;</span> / ' + info.low + '<span>&#176;</span>\n' +
                '                            </div>\n' +
                '                        </div>';

            // $('#nav-tabContent').append(tab);
            var tabContent = $('<div class="tab-pane fade ' + show + ' ' + active + ' forecastTabContent" id="nav-' + dayCount + '" role="tabpanel" aria-labelledby="nav-' + dayCount + '-tab">' +
                '<div class="row">' +
                '<div class="col-4"><div class="col-12 forecastTabContentTitle text-arvig-green text-center"><h1>' + info.name + '</h1></div>' +
                '<div class="col-12">&nbsp;</div>' +
                '<div class="col-12"><h3><i class="fas fa-thermometer-quarter"></i> Temp</h3></div>' +
                '<div class="col-12"><h3><i class="fas fa-wind"></i> Wind</h3></div>' +
                '</div>' +
                '<div class="row col-8 info"></div></div></div>');
            $('#nav-tabContent').append(tabContent);
            // }
            // }
            // if(info && hrCount < 6 ) {
            if (dayCount < 7) {
                thisClass.buildTabInnerContent(info, info.name, dayCount);
            }
            dayCount++;
            // hrCount++;
        });
        $('#nav-tab').html(tab);
    }


    buildTabInnerContent(data, dayName, count) {
        // console.log('++++++++++++++ BUILD TAB INNER CONNTENT +++++++++++++++++++++');
        var scale = 4;
        var max = 6;
        // if(data.forecast.length >= 24){
        scale = Math.round(data.forecast.length / 6);
        // }
        // console.log(data.forecast.length);
        // console.log(scale);
        var countz = 0;
        // $.each(data.forecast, function (key, value) {
        for (var i = 0; i < data.forecast.length;) {
            if (countz < 6) {

                var key = i;
                var value = data.forecast[i];
                // var info = $('<div class="col-8"></div>');
                var header = $('<div class="col-2 text-center"></div>');
                var icons = $('<div class=""></div>');
                var temp = $('<div class="row"></div>');
                var wind = $('<div class="row"></div>');
                var percip = $('<div class="row"></div>');
                var internalCount = 0;
                // wrapper.append(titles);
                //     console.log(data);
                var tempValue = value.temperature + '&#176;';
                var windValue = value.windSpeed.replace('mph', ''); //+ '  ' + windDirIcon(value.windDirection):'-' ;
                var endTime = new Date(value.endTime); //+ '  ' + windDirIcon(value.windDirection):'-' ;
                endTime = endTime.getHours();
                // var percipValue = (value.percip) ? value.percip + '%':'-' ;
                // if(dataTime > currentTime) {
                header.append('<div class="Fjalla">' + this.get12Hr(endTime) + '</div>');
                header.append('<div class="">' + this.getIcon(value.icon, value.isDaytime, "lg") + '</div>');
                // header.append('<div class="col-2 text-center"><i class="fas fa-cloud-sun lg"></i></div>');
                header.append('<div class="Fjalla"><span>' + tempValue + '</span></div>');
                header.append('<div class="Fjalla">' + windValue + this.windDirIcon(value.windDirection) + '</div>');

                // info.append(header, icons, temp, wind);
                // console.log(data.icon.substr(data.icon.lastIndexOf('/') + 1).split("?"));
                // getIcon(data.icon);
                // console.log(count);
                $('#nav-' + count + ' .row .info').append(header);
                // });
            }
            i = i + scale;
            countz++;
        }
        ;
        // console.log('++++++++++++++ END END END END END +++++++++++++++++++++');
        return true;


    }



    getIcon(icon, isDay, extraClass) {
        var iconData = icon.substr(icon.lastIndexOf('/') + 1).split("?");
        iconData = iconData[0].split(",");
        var day = (isDay) ? 'day' : 'night';
        var iconObj = {};
        // icons[iconData[0]]
        // console.log(icon);
        // console.log(icons.day);
        // console.log(iconData[0]);
        // console.log(day);

        if (iconData = this.icons.day[iconData[0]][day]) {
            if (extraClass) {
                iconObj = $(iconData.faIcon).addClass(extraClass);
            } else {
                iconObj = $(iconData.faIcon);
            }
            // console.log('++++++++++++++++++++');
            // console.log(iconObj);
            // console.log('++++++++++++++++++++');
            return iconObj[0].outerHTML;
        } else {
            return '<span>&nbsp;</span>';
        }

    }


    windDirIcon(dir) {
        // console.log(windDirIcons[dir]);
        return '<i class="fas fa-long-arrow-alt-down sm" style="-webkit-transform: rotate(' + this.windDirIcons[dir] + ');' +
            '    -moz-transform: rotate(' + this.windDirIcons[dir] + ');' +
            '    -ms-transform: rotate(' + this.windDirIcons[dir] + ');' +
            '    -o-transform: rotate(' + this.windDirIcons[dir] + ');' +
            '    transform: rotate(' + this.windDirIcons[dir] + ');"></i>';

    }


    get12Hr(hour) {
        if (hour == 0) {
            return '12AM'
        } else if (hour > 12) {
            return (hour - 12) + 'PM'
        } else {
            return hour + 'AM'
        }
    }


    addRadar(x, y) {
        $('#radarBody').html('<link rel="preload" href="https://www.rainviewer.com/map.html?loc=' + y + ',' + x + ',11&oFa=0&oC=1&oU=0&oCS=1&oF=0&oAP=1&rmt=2&c=3&o=84&lm=1&th=1" as="document">' +
            '<iframe id="radarId" src="https://www.rainviewer.com/map.html?loc=' + y + ',' + x + ',11&oFa=0&oC=1&oU=0&oCS=1&oF=0&oAP=1&rmt=2&c=3&o=84&lm=1&th=1" width="100%" frameborder="0" style="border:0;height:80vh; visibility:hidden;" onload="this.style.visibility = \'visible\';"  allowfullscreen></iframe>')
        // $('#radarBody').html('<iframe id="radarId" src="https://www.rainviewer.com/map.html?loc='+y+','+x+',12&oFa=0&oC=1&oU=0&oCS=1&oF=0&oAP=1&rmt=2&c=3&o=84&lm=1&th=1" width="100%" frameborder="0" style="border:0;height:80vh;" allowfullscreen></iframe>')
    }


    getDayName(dateTime) {
        var date = new Date(dateTime);
        var dayName = this.weekday[date.getDay()];
        return dayName;
    }


    // moveItem() {
    //     var firstTime = totalTime * .075;
    //     var nextTab = $('#weatherWidget nav .nav-item.active').next('.nav-item');
    //     console.log('--------------------- MOVE ITEM ---------------------');
    //     console.log(totalTime);
    //     console.log(nextTab.length);
    //     console.log(firstTime);
    //     if (nextTab.length) {
    //         nextTab.trigger('click');
    //         // console.log('clicked');
    //         setTimeout(this.moveItem, firstTime);
    //     } else {
    //         // clearInterval(loopTabs);
    //         this.radarAnimation();
    //         // console.log('clear');
    //     }
    //     // console.log(nextTab);
    //     // console.log('did something');
    // }
    //
    //
    // forecastAnimation() {
    //     // console.log('--------------------- FORECAST ---------------------');
    //     // console.log(totalTime);
    //     // var firstTime = totalTime * .075;
    //     // console.log(firstTime);
    //     this.moveItem();
    //     // setTimeout( function () {
    //     //     loopTabs = setInterval(this.moveItem, firstTime);
    //     // }, firstTime);
    // }
    //
    //
    // radarAnimation() {
    //     var firstTime = totalTime * .25;
    //     $('#nav-tab-test-2').trigger('click');
    //     var thisClass = this;
    //     setTimeout(
    //         function () {
    //             if (currentLoop < parseInt(eventData.event.loops)) {
    //
    //                 $('#weatherWidget nav').find('.nav-item').first().trigger('click');
    //                 $('#nav-tab-test-1').trigger('click');
    //                 this.todayAnimation(totalTime)
    //                 currentLoop++;
    //             } else {
    //                 // console.log(currentLoop);
    //                 console.log('End of loops');
    //                 console.log(eventData.nextEvent);
    //                 console.log("live.html?id=" + eventData.nextEvent.id);
    //                 window.location.replace("live.html?id=" + eventData.nextEvent.id);
    //
    //             }
    //             //wait for tabs then go
    //         }, firstTime);
    // }
    //
    //
    // todayAnimation(setTime) {
    //     console.log('TODAY ANIMATION');
    //     console.log(setTime);
    //     totalTime = setTime;
    //     //     console.log('--------------------- TODAY ---------------------');
    //     // console.log(totalTime);
    //     var firstTime = totalTime * .30;
    //     // console.log(firstTime);
    //     var thisClass = this;
    //     setTimeout(function () {
    //         // this.moveItem(totalTime);
    //         thisClass.forecastAnimation(totalTime);
    //         // console.log('started');
    //     }, firstTime);
    // }
}


