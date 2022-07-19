const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    let suffix = this.dataset.sizing || ''; // selects whatever data-sizing is set to
    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // sets property to value of whatever input we change...this is automatically bound by our event handler
}

inputs.forEach( input => {
     input.addEventListener('change', handleUpdate);
})
// this event handler is so that changes occur on mouse move. Without it change will only take place once input we deselect our input after the change
inputs.forEach( input => {
    input.addEventListener('mousemove', handleUpdate);
})
