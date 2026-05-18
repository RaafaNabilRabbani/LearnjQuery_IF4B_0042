$(document).ready(function() {
    $('#btnSimpanId').click(function() {
        
        let newName = $('#name').val();
        let newEmail = $('#email').val();
        let newNim = $('#nim').val();

        if (newName === "" || newEmail === "" || newNim === "") {
            alert("Input Tidak Boleh Kosong!!");
            return;
        }

        let pNama = $('<p></p>'); 
        pNama.text(newName); 
        pNama.addClass('nama'); 

        let pEmail = $('<p></p>');
        pEmail.text(newEmail);
        pEmail.addClass('email');
        
        let pNim = $('<p></p>');
        pNim.text(newNim);
        pNim.addClass('nim');

        $('#listHasil').append(pNama);
        $('#listHasil').append(pEmail);
        $('#listHasil').append(pNim);
        
        $('#name').val("");
        $('#email').val("");
        $('#nim').val("");
    });
});