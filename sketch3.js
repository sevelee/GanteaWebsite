var myFont;

var myYear, myMonth, myDay, myHour, myMinute, mySecond;
var gYear, gMonth, gDay, gHour, gMinute, gSecond;
var nowYear, nowMonth, nowDay, nowHour, nowMinute, nowSecond;

var days = new Array(13);

var cnv;

function setup() {

    // myFont = loadFont('assets/SourceHanSansHWSC-Regular.otf');
    cnv = createCanvas(375 * 2, 624);

    centerCanvas();

    gYear = 1994;
    gMonth = 3;
    gDay = 9;
    gHour = 11;
    gSecond = 0;

    days[1] = days[3] = days[5] = days[7] = days[8] = days[10] = days[12] = days[0] = 31;
    days[4] = days[6] = days[9] = days[11] = 30;
}

 var myString = 'Gantea has been bornt for ';

function mousePressed(){
    link("http://weibo.com/gantea");
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function link(url, winName, options) {
    winName && open(url, winName, options) || (location = url);
  }

function draw() {
    background(200);
    fill('#ED225D');
    // textFont(myFont);
    textSize(24);
    textAlign(LEFT);
    text(myString, 240, 176);

    calDate();

    textAlign(CENTER);
    text(myYear + ' years', 380, 220);
    text(myMonth + ' months', 380, 262);
    text(myDay + ' days', 380, 302);
    text(myHour + ' hours', 380, 342);
    text(myMinute + ' minutes', 380, 382);
    text(mySecond + ' seconds', 380, 422);
    
    text('@gantea', 380, 610);    
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