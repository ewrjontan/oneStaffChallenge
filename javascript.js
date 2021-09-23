
console.log('js working')

//let form = document.getElementById("incidentForm");

const submitButton = document.getElementById('submitButton');

/*function validate(e){
    e.preventDefault();*/
function validate(){
    console.log('validating');

    let injuryIncident = document.getElementById('injuryIncident');
    let illnessIncident = document.getElementById('illnessIncident');
    let incidentTypeErrorMessage = document.getElementById('incidentTypeErrorMessage');
    let incidentTypeLabel = document.getElementById('incidentTypeLabel');
    incidentTypeErrorMessage.innerHTML = '';

    if (injuryIncident.checked === false && illnessIncident.checked === false){
        incidentTypeLabel.classList.add('validation-error');
        injuryIncident.focus();
        return false;
    }else{
        incidentTypeLabel.classList.remove('validation-error');
    }

    let name = document.getElementById('name');
    let nameLabel = document.getElementById('nameLabel');

    console.log(`name: ${name.value}`);

    if (name.value == ""){
        nameLabel.classList.add('validation-error');
        nameLabel.focus();
        return false;
    }else{
        nameLabel.classList.remove('validation-error');


    }

    let jobTitle = document.getElementById('jobTitle');
    let jobTitleLabel = document.getElementById('jobTitleLabel');

    console.log(`job title: ${jobTitle.value}`);

    if (jobTitle.value == ""){
        jobTitleLabel.classList.add('validation-error');
        jobTitleLabel.focus();
        return false;
    }else{
        jobTitleLabel.classList.remove('validation-error');
    }


    let supervisor = document.getElementById('supervisor');
    let supervisorLabel = document.getElementById('supervisorLabel');

    console.log(`super visor: ${supervisor.value}`);

    if (supervisor.value == ""){
        supervisorLabel.classList.add('validation-error');
        supervisorLabel.focus();
        return false;
    }else{
        supervisorLabel.classList.remove('validation-error');
    }


    let whoDidYouReportTo = document.getElementById('whoDidYouReportTo');
    let whoDidYouReportToLabel = document.getElementById('whoDidYouReportToLabel');

    console.log(`whoDidYouReportTo: ${whoDidYouReportTo.value}`);
    
    if (whoDidYouReportTo.value == ""){
        whoDidYouReportToLabel.classList.add('validation-error');
        whoDidYouReportToLabel.focus();
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

    let anyAssistanceYes = document.getElementById('anyAssistanceYes');
    let anyAssistanceNo = document.getElementById('anyAssistanceNo');
    let anyAssistanceLabel = document.getElementById('anyAssistanceLabel');

    if (anyAssistanceYes.checked === false && anyAssistanceNo.checked === false){
        anyAssistanceLabel.classList.add('validation-error');
        anyAssistanceYes.focus();
        return false;
    }else{
        anyAssistanceLabel.classList.remove('validation-error');
    }

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
        wasTreatedLabel.classList.add('validation-error');
        wasTreatedYes.focus();
        return false;
    }else{
        wasTreatedLabel.classList.remove('validation-error');
    }

    let injuredBeforeYes = document.getElementById('injuredBeforeYes');
    console.log(`injuredBeforeYes: ${injuredBeforeYes}`);

    let injuredBeforeNo = document.getElementById('injuredBeforeNo');
    console.log(`injuredBeforeNo: ${injuredBeforeNo}`);

    let injuredBeforeLabel = document.getElementById('injuredBeforeLabel');

    if (injuredBeforeYes.checked === false && injuredBeforeNo.checked === false){
        injuredBeforeLabel.classList.add('validation-error');
        injuredBeforeYes.focus();
        return false;
    }else{
        injuredBeforeLabel.classList.remove('validation-error');
    }

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

    return true;

}


function handleSubmit(e){
    console.log('submit clicekd');
    e.preventDefault();

    let isValid = validate();

    if (isValid){
        console.log('forms are valid')
        
        let form = document.getElementById("incidentForm");

        let statusModal = new bootstrap.Modal(document.getElementById('statusModal'));
        let modalStatus = document.getElementById('modalStatus');
        let modalMessage = document.getElementById('modalMessage');

        let formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
          }).then(response => {
            modalStatus.innerHTML = "Success";
            modalMessage.innerHTML = "Your incident report has been received.";
            statusModal.show()
            form.reset();
            
          }).catch(error => {
            modalStatus.innerHTML = "Uh oh!";
            modalMessage.innerHTML = "Oops! Something went wrong. Please try again later.";
            statusModal.show()
          });
        
        
        
        
    }else{
        console.log('forms are invalid')    
    }

    
}

submitButton.addEventListener('click', handleSubmit);
