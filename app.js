require('./mt.js');

var counter = 0;
var hours = (new Date()).getHours();
var isDayTime = hours > 4 && hours < 18;

while(!isDayTime)
{
    if(counter < 5)
    {
        morseText("5  5  5  5  5  ", 50000);
        counter++;
    }
    else
    {
        morseText("ol7m  ol7m", 120000);
       counter = 0;
    }
    morseText('     ', 100000);
    hours = (new Date()).getHours();
    isDayTime = hours > 4 && hours < 18;
}