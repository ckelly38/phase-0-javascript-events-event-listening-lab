function addingEventListener() {
    const mbutton = document.getElementById("button");
    mbutton.addEventListener('click', function() {
        console.log("button was clicked!");
        alert("I was clicked!");
    });
}
addingEventListener();
