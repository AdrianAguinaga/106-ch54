function saveTask()
{
    console.log('saving task');
    //get values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#txtselColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const number = $("#numBudget").val();

    //build an object

    //save to server

    //display the data recieved from server
}

function init(){
    console.log('init');
    //load data

    //hook events
    $("#btnSave").click(saveTask);
}

window.onload = init;
//Variable Scope
