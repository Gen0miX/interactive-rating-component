
var rating;

document.querySelectorAll('button.round.li')
    .forEach((button, i) => 
        button.addEventListener('click', () => {
            rating=button.innerHTML;
            console.log(rating);
        }));

function onSubmit() {
        if(rating != undefined || rating != null){
            document.getElementById("rating").style.display='none';
            document.getElementById("thankyou").style.display='flex';
            document.getElementById("myRating").innerHTML = rating;
        }
        
}

