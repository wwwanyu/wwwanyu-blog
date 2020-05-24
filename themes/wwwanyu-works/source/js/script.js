var copyEmail = document.querySelector('#copyBtn');
copyEmail.addEventListener('click', function(event) {
  var emailTxt = document.querySelector('#email');
  var range = document.createRange();
  range.selectNode(emailTxt);
  window.getSelection().addRange(range);
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log(`Copy email command was ${msg}`);
    var renderMsg = document.querySelector('#copied');
    renderMsg.className += " d-block";
    } catch(err) {
      console.log('Oops, unable to copy');
    }
  window.getSelection().removeAllRanges();
});

$('.carousel').carousel({
    interval: 2400
  })

function handleClose(){
  console.log(`close`)
  var renderMsg = document.querySelector('#copied');
  renderMsg.classList.remove("d-block")
}

function handleEsc(event){
  var x = event.charCode
  console.log(x)
  var renderMsg = document.querySelector('#copied');
  if (x === 27){
    renderMsg.classList.remove("d-block");
  }
}
