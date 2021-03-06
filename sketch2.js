var myFont;

var myYear, myMonth, myDay, myHour, myMinute, mySecond;
var gYear, gMonth, gDay, gHour, gMinute, gSecond;
var nowYear, nowMonth, nowDay, nowHour, nowMinute, nowSecond;

var days = new Array(13);

function preload() {
  
}

function setup() {
    myFont = loadFont('assets/SourceHanSansHWSC-Regular.otf');
    createCanvas(500, 500);

    gYear = 1994;
    gMonth = 3;
    gDay = 9;
    gHour = 11;
    gSecond = 0;

    days[1] = days[3] = days[5] = days[7] = days[8] = days[10] = days[12] = days[0] = 31;
    days[4] = days[6] = days[9] = days[11] = 30;
}

 var myString = 'Gantea has been bornt for ';

function draw() {
    background(200);
    fill('#ED225D');
    textFont(myFont);
    textSize(32);
    text(myString, 100, 100);

    calDate();

    text(myYear + ' years', 100, 120);
    text(myMonth + ' months', 100, 140);
    text(myDay + ' days', 100, 160);
    text(myHour + ' hours', 100, 180);
    text(myMinute + ' minutes', 100, 200);
    text(mySecond + ' seconds', 100, 220);
    
    
}

function calDate() {
    nowYear = year();
    nowMonth = month();
    nowDay = day();
    nowHour = hour();
    nowMinute = minute();
    nowSecond = second();


    mySecond = nowSecond - gSecond;
    myMinute = nowMinute - gSecond;

    if (nowHour >= gHour) {
        myHour = nowHour - gHour;
    } else {
        nowDay--;
        nowHour += 24;
        myHour = nowHour - gHour;
    }

    if (nowDay >= gDay) {
        myDay = nowDay - gDay;
    } else {
        if (nowMonth == 3) {
            if ((nowYear % 4 == 0 && nowYear % 100 != 0) || (nowYear % 400 == 0)) {
                days[2] = 29;
            } else {
                days[2] = 28;
            }
        }
        nowMonth--;
        nowDay += days[nowMonth];
        myDay = nowDay - gDay;
    }

    if (nowMonth >= gMonth) {
        myMonth = nowMonth - gMonth;
    } else {
        nowYear--;
        nowMonth += 12;
        myMonth = nowMonth - gMonth;
    }

    myYear = nowYear - gYear;

    // showDebug();

}

function showDebug() {
    text(nowYear, 200, 200);
    text(nowMonth, 200, 220);
    text(nowDay, 200, 240);
    text(nowHour, 200, 260);
    text(nowMinute, 200, 280);
    text(nowSecond, 200, 300);

    text(myYear, 240, 200);
    text(myMonth, 240, 220);
    text(myDay, 240, 240);
    text(myHour, 240, 260);
    text(myMinute, 240, 280);
    text(mySecond, 240, 300);
}