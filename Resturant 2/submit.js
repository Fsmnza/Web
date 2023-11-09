    function submitForm() {
        const formData = {
            tableReservation: {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                numberGuests: document.getElementById('number-guests').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                message: document.getElementById('message').value
            }
        };
        console.log(formData);
    }
    document.getElementById('contact').addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm(); 
    });
    const form = {
        contactForm: {
            id: "contact",
            action: "",
            method: "post",
            row: {
                columns: [
                    {
                    size: "col-lg-12",
                    title: "Table Reservation",
                    },
                    {
                    size: "col-lg-6 col-sm-12",
                    fieldset: {
                    input: {
                    name: {
                    type: "text",
                    id: "name",
                    placeholder: "Your Name*",
                    required: true,
                  },
             },
             },
         },
         ],
     },
     },
 };
    