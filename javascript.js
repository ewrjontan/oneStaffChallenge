
console.log('js working')



let form = document.getElementById("incidentForm");


const submitButton = document.getElementById('submitButton');



function validate(e){
    e.preventDefault();

    //clear validation error messages
    //document.getElementsByClassName('validation-error').innerHTML = '';


    console.log('form submitted');
    //console.log(form.elements);

    //let inputs = form.elements;
    

    //validation
    //get injury or illness

    

    let injuryIncident = document.getElementById('injuryIncident');
    let illnessIncident = document.getElementById('illnessIncident');
    let incidentTypeErrorMessage = document.getElementById('incidentTypeErrorMessage');
    let incidentTypeLabel = document.getElementById('incidentTypeLabel');
    incidentTypeErrorMessage.innerHTML = '';

    if (injuryIncident.checked === false && illnessIncident.checked === false){
        //incidentTypeErrorMessage.innerHTML = 'please select incident type';
        //incidentTypeErrorMessage.focus();
        incidentTypeLabel.classList.add('validation-error');
        incidentTypeLabel.focus();
        //alert('Please select an incident type');
        return false;
    }else{
        incidentTypeLabel.classList.remove('validation-error');
    }

    let name = document.getElementById('name');
    let nameErrorMessage = document.getElementById('nameErrorMessage')
    let nameLabel = document.getElementById('nameLabel');

    console.log(`name: ${name.value}`);

    if (name.value == ""){
        //nameErrorMessage.innerHTML = 'please enter your name';
        nameLabel.classList.add('validation-error');
        nameLabel.focus();
        //alert('Please enter your name');
        return false;
    }else{
        //nameErrorMessage.innerHTML = '';
        nameLabel.classList.remove('validation-error');


    }

    let jobTitle = document.getElementById('jobTitle');
    let jobTitleErrorMessage = document.getElementById('jobTitleErrorMessage');
    let jobTitleLabel = document.getElementById('jobTitleLabel');

    console.log(`job title: ${jobTitle.value}`);

    if (jobTitle.value == ""){
        //jobTitleErrorMessage.innerHTML = 'please enter your job title';
        jobTitleLabel.classList.add('validation-error');
        jobTitleLabel.focus();
        //alert('Please enter your name');
        return false;
    }else{
        jobTitleLabel.classList.remove('validation-error');
    }


    let supervisor = document.getElementById('supervisor');
    let supervisorLabel = document.getElementById('supervisorLabel');

    console.log(`super visor: ${supervisor.value}`);

    if (supervisor.value == ""){
        //jobTitleErrorMessage.innerHTML = 'please enter your job title';
        supervisorLabel.classList.add('validation-error');
        supervisorLabel.focus();
        //alert('Please enter your name');
        return false;
    }else{
        supervisorLabel.classList.remove('validation-error');
    }


    let whoDidYouReportTo = document.getElementById('whoDidYouReportTo');
    let whoDidYouReportToLabel = document.getElementById('whoDidYouReportToLabel');

    console.log(`whoDidYouReportTo: ${whoDidYouReportTo.value}`);
    
    if (whoDidYouReportTo.value == ""){
        //jobTitleErrorMessage.innerHTML = 'please enter your job title';
        whoDidYouReportToLabel.classList.add('validation-error');
        whoDidYouReportToLabel.focus();
        //alert('Please enter your name');
        return false;
    }else{
        whoDidYouReportToLabel.classList.remove('validation-error');
    }



    let incidentDate = document.getElementById('incidentDate');
    let incidentDateLabel = document.getElementById('incidentDateLabel');

    console.log(`incidentDate: ${incidentDate.value}`);

    if (incidentDate.value == ""){
        incidentDateLabel.classList.add('validation-error');
        incidentDateLabel.focus();
        return false;
    }else{
        incidentDateLabel.classList.remove('validation-error');
    }



    let incidentTime = document.getElementById('incidentTime');
    let incidentTimeLabel = document.getElementById('incidentTimeLabel');

    console.log(`incidentTime: ${incidentTime.value}`);

    if (incidentTime.value == ""){
        incidentTimeLabel.classList.add('validation-error');
        incidentTimeLabel.focus();
        return false;
    }else{
        incidentTimeLabel.classList.remove('validation-error');
    }



    let shiftStartTime = document.getElementById('shiftStartTime');
    let shiftStartTimeLabel = document.getElementById('shiftStartTimeLabel');

    console.log(`shiftStartTime: ${shiftStartTime}`);

    if (shiftStartTime.value == ""){
        shiftStartTimeLabel.classList.add('validation-error');
        shiftStartTimeLabel.focus();
        return false;
    }else{
        shiftStartTimeLabel.classList.remove('validation-error');
    }

    /*let witnesses = document.getElementById('witnesses');
    let witnessesLabel = document.getElementById('witnessesLabel');

    console.log(`witnesses: ${witnesses}`);

    if (witnesses.value == ""){
        witnessesLabel.classList.add('validation-error');
        witnessesLabel.focus();
        return false;
    }else{
        witnessesLabel.classList.remove('validation-error');
    }*/

    let incidentLocation = document.getElementById('incidentLocation');
    let incidentLocationLabel = document.getElementById('incidentLocationLabel');

    console.log(`incidentLocation: ${incidentLocation}`);

    if (incidentLocation.value == ""){
        incidentLocationLabel.classList.add('validation-error');
        incidentLocationLabel.focus();
        return false;
    }else{
        incidentLocationLabel.classList.remove('validation-error');
    }

    let whatWereYouDoing = document.getElementById('whatWereYouDoing');
    let whatWereYouDoingLabel = document.getElementById('whatWereYouDoingLabel');

    console.log(`whatWereYouDoing: ${whatWereYouDoing}`);
    
    if (whatWereYouDoing.value == ""){
        whatWereYouDoingLabel.classList.add('validation-error');
        whatWereYouDoingLabel.focus();
        return false;
    }else{
        whatWereYouDoingLabel.classList.remove('validation-error');
    }

    let whatHappened = document.getElementById('whatHappened');
    let whatHappenedLabel = document.getElementById('whatHappenedLabel');

    console.log(`whatHappened: ${whatHappened}`);
    
    if (whatHappened.value == ""){
        whatHappenedLabel.classList.add('validation-error');
        whatHappenedLabel.focus();
        return false;
    }else{
        whatHappenedLabel.classList.remove('validation-error');
    }


    let bodyPartInjured = document.getElementById('bodyPartInjured');
    let bodyPartInjuredLabel = document.getElementById('bodyPartInjuredLabel');

    console.log(`bodyPartInjured: ${bodyPartInjured}`);

    if (bodyPartInjured.value == ""){
        bodyPartInjuredLabel.classList.add('validation-error');
        bodyPartInjuredLabel.focus();
        return false;
    }else{
        bodyPartInjuredLabel.classList.remove('validation-error');
    }




    let wasTreatedYes = document.getElementById('wasTreatedYes');
    console.log(`wasTreatedYes: ${wasTreatedYes.value}`);

    let wasTreatedNo = document.getElementById('wasTreatedNo');
    console.log(`wasTreatedNo: ${wasTreatedNo.value}`);

    let wasTreatedLabel = document.getElementById('wasTreatedLabel');

    if (wasTreatedYes.checked === false && wasTreatedNo.checked === false){
        //incidentTypeErrorMessage.innerHTML = 'please select incident type';
        //incidentTypeErrorMessage.focus();
        wasTreatedLabel.classList.add('validation-error');
        wasTreatedLabel.focus();
        //alert('Please select an incident type');
        return false;
    }else{
        wasTreatedLabel.classList.remove('validation-error');
    }



    /*let treatedBy = document.getElementById('treatedBy');
    console.log(`treatedBy: ${treatedBy}`);

    let treatedByPhone = document.getElementById('treatedByPhone');
    console.log(`treatedByPhone: ${treatedByPhone}`);

    let placeOfTreatment = document.getElementById('placeOfTreatment');
    console.log(`placeOfTreatment: ${placeOfTreatment}`);*/

    let injuredBeforeYes = document.getElementById('injuredBeforeYes');
    console.log(`injuredBeforeYes: ${injuredBeforeYes}`);

    let injuredBeforeNo = document.getElementById('injuredBeforeNo');
    console.log(`injuredBeforeNo: ${injuredBeforeNo}`);

    let injuredBeforeLabel = document.getElementById('injuredBeforeLabel');

    if (injuredBeforeYes.checked === false && injuredBeforeNo.checked === false){
        //incidentTypeErrorMessage.innerHTML = 'please select incident type';
        //incidentTypeErrorMessage.focus();
        injuredBeforeLabel.classList.add('validation-error');
        injuredBeforeLabel.focus();
        //alert('Please select an incident type');
        return false;
    }else{
        injuredBeforeLabel.classList.remove('validation-error');
    }

    /*
    let priorInjuryDescription = document.getElementById('priorInjuryDescription');
    console.log(`priorInjuryDescription: ${priorInjuryDescription}`);*/
    

    let signature = document.getElementById('signature');
    let signatureLabel = document.getElementById('signatureLabel');

    console.log(`signature: ${signature}`);

    if (signature.value == ""){
        signatureLabel.classList.add('validation-error');
        signatureLabel.focus();
        return false;
    }else{
        signatureLabel.classList.remove('validation-error');
    }

    let todaysDate = document.getElementById('todaysDate');
    let todaysDateLabel = document.getElementById('todaysDateLabel');

    console.log(`todaysDate: ${todaysDate}`);

    if (todaysDate.value == ""){
        todaysDateLabel.classList.add('validation-error');
        todaysDateLabel.focus();
        return false;
    }else{
        todaysDateLabel.classList.remove('validation-error');
    }


}


//form.addEventListener("submit", handleSubmit);
submitButton.addEventListener('click', validate);




form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});