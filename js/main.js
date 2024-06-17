
document.addEventListener('DOMContentLoaded', () => {

  const changeColorElements = document.querySelectorAll('.change-color');


  const handleClick = (event) => {

    changeColorElements.forEach(element => {
      element.classList.remove('active');
    });


    event.currentTarget.classList.add('active');
  }


  changeColorElements.forEach(element => {
    element.addEventListener('click', handleClick);
  });
});
