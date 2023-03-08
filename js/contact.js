/** 
* @captureData
 */

function captureData(){
    let name = document.getElementById('nameContact')
    let email = document.getElementById('emailContact')
    let mesagge = document.getElementById('messageContact')

    let dataContact = {
        [name.name]: name.value,
        [email.name]: email.value,
        [mesagge.name]: mesagge.value
    }
    /* console.log(dataContact) */
    return dataContact;

}



function alertContact(){
    swal({
        title: "Check if your data is correct:",
        text: "Your name: " + `${captureData()['name']}` + " \nYour email: " + `${captureData()['email']}` + " \nYour message: " + `${captureData()['message']}`,
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
        swal("Your data has been saved!", {
            icon: "success",
        });
        } else {
        swal("Your data has been deleted!");
        }
    });
}

const handleForm=(event) => {
    event.preventDefault()
    captureData()
    alertContact()
}

let buttonForm = document.getElementById('submit')


buttonForm.addEventListener(
    'click', /* tipo de evento que tiene que escuchar */
    handleForm, /* funcion que se va a ejecutar cada vez que se realice el evento */
)