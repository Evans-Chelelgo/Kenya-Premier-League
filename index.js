function blink()
{
    document.getElementById('blinking').innerHTML="VIEW PREMIER LEAGUE TABLE";
    setTimeout('appear()', 500);
}

function appear()
    {

    document.getElementById('blinking').innerHTML="VIEW PREMIER LEAGUE TABLE";
    setTimeout('blink()', 500);
}
