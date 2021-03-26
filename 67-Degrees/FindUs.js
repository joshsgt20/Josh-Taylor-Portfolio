function MiltonKeynes()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Milton Keynes Opening Times</strong><br>Monday: 08:00-19:00<br>Tuesday: 08:00-19:00<br>Wednesday: 08:00-19:00<br>Thursday: 09:00-17:00<br>Friday: 09:00-20:00<br>Saturday: 09:-20:00<br>Sunday: 10:00-16:00';
 document.getElementById('MapImage').src='Map Screenshots/Milton Keynes-min.PNG';
}

function London()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>London Opening Times</strong><br>Monday: 07:00-20:00<br>Tuesday: 07:00-20:00<br>Wednesday: 07:00-21:00<br>Thursday: 07:00-20:00<br>Friday: 06:00-21:00<br>Saturday: 07:-21:00<br>Sunday: 10:00-17:00';
 document.getElementById('MapImage').src='Map Screenshots/London-min.PNG';
}

function Birmingham()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Birmingham Opening Times</strong><br>Monday: 07:00-19:00<br>Tuesday: 07:00-19:00<br>Wednesday: 07:00-19:00<br>Thursday: 07:00-18:00<br>Friday: 08:00-20:00<br>Saturday: 09:-20:00<br>Sunday: 10:00-16:00';
 document.getElementById('MapImage').src='Map Screenshots/Birmingham-min.PNG';
}

function Stoke()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Stoke-on-Trent Opening Times</strong><br>Monday: 08:00-19:00<br>Tuesday: 08:00-19:00<br>Wednesday: 08:00-19:00<br>Thursday: 09:00-18:00<br>Friday: 08:00-20:00<br>Saturday: 08:-20:00<br>Sunday: 10:00-17:00';
 document.getElementById('MapImage').src='Map Screenshots/Stoke-min.PNG';
}

function Leicester()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Leicester Opening Times</strong><br>Monday: 07:00-20:00<br>Tuesday: 07:00-20:00<br>Wednesday: 07:00-22:00<br>Thursday: 07:00-19:00<br>Friday: 07:00-20:00<br>Saturday: 08:-20:00<br>Sunday: 09:00-16:00';
 document.getElementById('MapImage').src='Map Screenshots/Leicester-min.PNG';
}

function Bristol()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Bristol Opening Times</strong><br>Monday: 08:00-19:00<br>Tuesday: 08:00-19:00<br>Wednesday: 08:00-19:00<br>Thursday: 09:00-17:00<br>Friday: 09:00-20:00<br>Saturday: 09:-20:00<br>Sunday: 10:00-16:00';
 document.getElementById('MapImage').src='Map Screenshots/Bristol-min.PNG';
}

function Nottingham()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Nottingham Opening Times</strong><br>Monday: 08:00-20:00<br>Tuesday: 08:00-20:00<br>Wednesday: 08:00-20:00<br>Thursday: 09:00-20:00<br>Friday: 09:00-21:00<br>Saturday: 09:-20:00<br>Sunday: 10:00-17:00';
 document.getElementById('MapImage').src='Map Screenshots/Nottingham-min.PNG';
}

function Weymouth()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Weymouth Opening Times</strong><br>Monday: 08:00-19:00<br>Tuesday: 08:00-19:00<br>Wednesday: 08:00-19:00<br>Thursday: 09:00-17:00<br>Friday: 09:00-20:00<br>Saturday: 09:-20:00<br>Sunday: 10:00-16:00';
 document.getElementById('MapImage').src='Map Screenshots/Weymouth-min.PNG';
}

function Leeds()
{
 document.getElementById('OpeningTimes').innerHTML = '<strong>Leeds Opening Times</strong><br>Monday: 07:00-20:00<br>Tuesday: 07:00-20:00<br>Wednesday: 07:00-20:00<br>Thursday: 07:00-19:00<br>Friday: 07:00-20:00<br>Saturday: 08:-20:00<br>Sunday: 09:00-17:00';
 document.getElementById('MapImage').src='Map Screenshots/Leeds-min.PNG';
}


gsap.from("#MapImage", {
  duration: 2,
  y: 200,
  opacity: 0,
  ease: "power2",
  force3D: true

});

gsap.from("img", {
  duration: 1,

  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  ease: "back",
  force3D: true
});
