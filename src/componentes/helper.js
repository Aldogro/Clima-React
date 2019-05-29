export function girarAguja(deg){

  const agujaId = document.querySelector('#agujaId');

  agujaId.style.transform = `rotateZ(${deg}deg)`;
}
