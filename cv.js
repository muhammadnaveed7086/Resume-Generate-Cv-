function AddneweduField() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('my-2')
    newNode.classList.add('eduField')
    newNode.setAttribute('placeholder', 'Enter here')
    let eduOB = document.getElementById('edu')
    let eduButtonOB = document.getElementById('eduAddButton')
    eduOB.insertBefore(newNode, eduButtonOB)
}
function AddnewweField() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('my-2')
    newNode.classList.add('weField')
    newNode.setAttribute('placeholder', 'Enter here')
    let weOB = document.getElementById('we')
    let weButtonOB = document.getElementById('weAddButton')
    weOB.insertBefore(newNode, weButtonOB)

}
function AddnewskillField() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('my-2')
    newNode.classList.add('form-control')
    newNode.classList.add('skillField')
    newNode.setAttribute('placeholder', 'Enter here')
    let skillOB = document.getElementById('skill')
    let addskillButtonOB = document.getElementById('addskillButton')
    skillOB.insertBefore(newNode, addskillButton)
}
function GenerateCv() {
    // First method for dom
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    // second and direct method for dom
    document.getElementById('nameT2').innerHTML = document.getElementById('nameField').value
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value
    document.getElementById('adressT').innerHTML = document.getElementById('adressField').value
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value
    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedinField').value
    document.getElementById('webT').innerHTML = document.getElementById('webField').value
    document.getElementById('aboutmeT').innerHTML = document.getElementById('aboutme').value

    let edus = document.getElementsByClassName('eduField');
    let edutr = '';
    for (const value of edus) {
        edutr = edutr + `<li>${value.value}</li>`
    }
    document.getElementById('eduT').innerHTML = edutr;

    // we


    let wes = document.getElementsByClassName('weField');
    let wer = '';
    for (const value of wes) {
        wer = wer + `<li>${value.value}</li>`
    }

    document.getElementById('weT').innerHTML = wer;


    // skill
    let skill = document.getElementsByClassName('skillField');
    let skillr = '';
    for (const value of skill) {
        skillr = skillr + `<li>${value.value}</li>`

    }
    document.getElementById('skillT').innerHTML = skillr;

    document.getElementById('cv-form').style = 'display:none;'
    document.getElementById('templatecontainer').style = 'display:block;'
}
function AddPrintButton() {
    window.print()
}
