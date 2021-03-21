var el_down = document.getElementById("newpass"); 

/* Function to generate combination of password */ 
function generateP() { 
	var len = document.getElementById("lenght").value;
	var pass = ''; 
	var str = '';
	if(document.getElementById("lowercase").checked){
		str += 'abcdefghijklmnopqrstuvwxyz';
	}
	if(document.getElementById("uppercase").checked){
		str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if(document.getElementById("numbers").checked){
		str += '0123456789';
	}
	if(document.getElementById("symbols").checked){
		str += '!@#$%^&*?';
	}
	if(str==''){
		alert("Select at least one CheckBox");
	}
	else{
		for (i = 1; i <= len; i++) { 
			var char = Math.floor(Math.random() 
						* str.length); 
			pass += str.charAt(char) ;			
		} 
		document.getElementById("progress").value=scorePassword(pass);
		document.getElementById("passStrength").innerHTML = "This is "+checkPassStrength(pass)+"  Password !!!";
		return pass; 
	}
	return '';
} 

function gfg_Run() { 
	el_down.value = generateP(); 
}
function OnCopy()
{
	var copyText = document.getElementById("newpass");
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	/* Copy the text inside the text field */
	document.execCommand("copy");
	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}		
function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    var variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}
function checkPassStrength(pass) {
    var score = scorePassword(pass);
    if (score > 80)
	{
		document.getElementById("newpass").style.color="green";
        return "strong";
	}
    if (score > 60)
	{
		document.getElementById("newpass").style.color="orange";
        return "good";
	}
    if (score >= 0)
	{
		document.getElementById("newpass").style.color="red";
        return "weak";
	}
    return "";
}
function checkLen()
{
	if(document.getElementById("lenght").value>50){
		document.getElementById("lenght").value =50;
	}
	if(document.getElementById("lenght").value<6){
		document.getElementById("lenght").value =6;
	}
}