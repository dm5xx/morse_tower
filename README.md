morse_tower: if you want your tower blink... Add some relay controlled led and connect it to ur raspberry at GPIO16 (aka pin27)

forever start /home/pi/morse_tower/app.js     // u need to npm install forever, onoff, sleep
forever stop /home/pi/morse_tower/app.js      // start/stop forever server and/or add it to startup

gpio write 27 1 // set pin16 on
gpio wrtie 27 0 // set pin16 off


Have fun!
LLAP! DM5XX v. 0.1
