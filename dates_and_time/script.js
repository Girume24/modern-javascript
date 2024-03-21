let d;

d = new Date();

d = d.toString();

d = new Date('2000-01-03T11:30:00');
d = new Date('01/03/2000 11:30:00');
d = new Date('2000-01-03');
d = new Date('01-03-2000');

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1710932801494);

d = Math.floor(Date.now()/1000);

console.log(d);