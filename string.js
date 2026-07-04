const name="ashutosh";
const repocount=7;
console.log(`helo my name is ${name} and my repo count is ${repocount}`)
const gamename=new String('ashutosh-dash')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newstring=gamename.substring(0,4)
console.log(newstring);
const onetherstring=gamename.slice(-8,4)
console.log(onetherstring);
const newstringone="    ashu   "
console.log(newstringone);
console.log(newstringone.trim());

const url="https://ashu.com/ashu%20dash"
console.log(url.replace('%20','-'))