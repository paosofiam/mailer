function submitRoutine(){
    var messageIsValid = validateAll();
    if(messageIsValid){
        data = readValues();
        submitMail(data);
    }
}

function modalSuccess(){
    showModal('successModal');
    setTimeout(() => {
        window.location.reload();
      }, "3000");
}

function showModal(ID){
    element = document.getElementById(ID);
    element.style.display = 'flex';
    setTimeout(() => {
        element.style.opacity = '1';;
      }, "250");
}

function submitMail(postData){
    fetch("https://paosofiam.com/portfolio/contact-form-mailer/assets/scripts/mailer.php",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
        body: postData,
    }).then(function(data){
        //console.log(data);
        if(data.ok){
            console.log('Success: '+data.status);
            modalSuccess();
        }
        else{
            console.log('Error: '+data.status);
        }
    }).then(myJson => { 
     //console.log("var myJson: ",myJson);
     return data;
    }).catch(function(error){/**/})
}
/*Read values*/
function readValues(){
    let formData = {
        firstName : document.getElementById('firstName').value,
        lastName : document.getElementById('lastName').value,
        eMail : document.getElementById('eMail').value,
        queryType : document.querySelector('input[name=queryType]:checked').value,
        mMessage : document.getElementById('mMessage').value,
        consentCheck : document.getElementById('consentCheck').checked
    }
    postData = JSON.stringify(formData);
    return postData;
}


