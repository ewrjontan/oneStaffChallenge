
console.log('js working')



let form = document.getElementById("incidentForm");


const submitButton = document.getElementById('submitButton');



function validate(e){
    e.preventDefault();


    console.log('form submitted');
    //console.log(form.elements);

    //let inputs = form.elements;
    //let typeOfIncident = ;

    //validation
    //get injury or illness

    /*if (inputs['injury']){
        typeOfIncident = injury;
    }else if (inputs['illness']){
        typeOfIncident = illness;
    }else{
        console.log('please select the type of incident');
    }*/

    let injuryIncident = document.getElementById('injuryIncident').checked;
    let illnessIncident = document.getElementById('illnessIncident').checked;

    console.log('injury or illness');
    console.log(injuryIncident);
    console.log(illnessIncident);

    let name = document.getElementById('name').value;

    console.log(`name: ${name}`);

    let jobTitle = document.getElementById('jobTitle').value;

    console.log(`job title: ${jobTitle}`);

    let supervisor = document.getElementById('supervisor').value;
    console.log(`super visor: ${supervisor}`);

    let whoDidYourReportTo = document.getElementById('whoDidYourReportTo').value;
    console.log(`whoDidYourReportTo: ${whoDidYourReportTo}`);

    let incidentDate = document.getElementById('incidentDate').value;
    console.log(`incidentDate: ${incidentDate}`);

    let incidentTime = document.getElementById('incidentTime').value;
    console.log(`incidentTime: ${incidentTime}`);

    let shiftStartTime = document.getElementById('shiftStartTime').value;
    console.log(`shiftStartTime: ${shiftStartTime}`);

    let witnesses = document.getElementById('witnesses').value;
    console.log(`witnesses: ${witnesses}`);

    let incidentLocation = document.getElementById('incidentLocation').value;
    console.log(`incidentLocation: ${incidentLocation}`);

    let whatWereYouDoing = document.getElementById('whatWereYouDoing').value;
    console.log(`whatWereYouDoing: ${whatWereYouDoing}`);

    let whatHappened = document.getElementById('whatHappened').value;
    console.log(`whatHappened: ${whatHappened}`);

    let bodyPartInjured = document.getElementById('bodyPartInjured').value;
    console.log(`bodyPartInjured: ${bodyPartInjured}`);

    let wasTreatedYes = document.getElementById('wasTreatedYes').checked;
    console.log(`wasTreatedYes: ${wasTreatedYes}`);

    let wasTreatedNo = document.getElementById('wasTreatedNo').checked;
    console.log(`wasTreatedNo: ${wasTreatedNo}`);

    let treatedBy = document.getElementById('treatedBy').value;
    console.log(`treatedBy: ${treatedBy}`);

    let treatedByPhone = document.getElementById('treatedByPhone').value;
    console.log(`treatedByPhone: ${treatedByPhone}`);

    let placeOfTreatment = document.getElementById('placeOfTreatment').value;
    console.log(`placeOfTreatment: ${placeOfTreatment}`);

    let injuredBeforeYes = document.getElementById('injuredBeforeYes').checked;
    console.log(`injuredBeforeYes: ${injuredBeforeYes}`);

    let injuredBeforeNo = document.getElementById('injuredBeforeNo').checked;
    console.log(`injuredBeforeNo: ${injuredBeforeNo}`);

    let priorInjuryDescription = document.getElementById('priorInjuryDescription').value;
    console.log(`priorInjuryDescription: ${priorInjuryDescription}`);

    let signature = document.getElementById('signature').value;
    console.log(`signature: ${signature}`);

    let todaysDate = document.getElementById('todaysDate').value;
    console.log(`todaysDate: ${todaysDate}`);


}


//form.addEventListener("submit", handleSubmit);
submitButton.addEventListener('click', validate);




