function validateNumericInput(input) {
  input.value = input.value.replace(/[^0-9]/g, "");
}

function ageCalculation(event) {
    var ageValue =  event.value;
    var adultCard = document.querySelector('.adult-card');
    var childrenCard = document.querySelector('.children-card');
    var descriptionCard = document.querySelector('.description-card');
    if (ageValue >= 18) {
        adultCard.classList.remove('d-none');
        childrenCard.classList.add('d-none');
        descriptionCard.classList.add('d-none');
    }else if(ageValue == 0 || ageValue == '' || ageValue == undefined){
        childrenCard.classList.add('d-none');
        adultCard.classList.add('d-none');
        descriptionCard.classList.remove('d-none');
    }
    else{
        childrenCard.classList.remove('d-none');
        adultCard.classList.add('d-none');
        descriptionCard.classList.add('d-none');        
    }
}