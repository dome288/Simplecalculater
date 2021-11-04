function{
    let p=document.getElementById('amount').value;
    let t=document.getElementById('time').value;
    let r=document.getElementById('rate').value;


    let SI=(p*t*r)/100;

    document.getElementById('si').innerHTML="Total Simple Interest Is: " +SI;
}
