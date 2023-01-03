/* START TASK 1: Your code goes here */
const cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {
  cell.addEventListener('click', (e) => {
    let target = e.target;
    (index === 0 || index === 3 || index === 6) && addBlue(index);
    target.classList.contains('cell-special') && specialAdd();
    addYellow(target);
  });
});

function addYellow(el) {
  !el.classList.contains('yellow') && el.classList.add('yellow');
}

function addBlue(index) {
  for (let i = index; i < index + 3; i++) {
    !cells[i].classList.contains('yellow') && cells[i].classList.add('blue');
  }
}

function specialAdd() {
  cells.forEach((el) => {
    !el.classList.contains('yellow') && !el.classList.contains('blue') && el.classList.add('green');
  });
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const sendButton = document.querySelector('.btn');
const userPhone = document.querySelector('.userPhone');
const descValid = document.querySelector('.is-valid');
const descInValid = document.querySelector('.is-invalid');

userPhone.onkeyup = function validation() {
  const reg = /^\+380\d{9}/;
  if (userPhone.value.length === 0) {
    descInValid.style.display = 'none';
    descValid.style.display = 'none';
    userPhone.style.boxShadow = '0 0 5px 2px rgb(103, 142, 248)';
  }
  if (userPhone.value.length === 13) {
    if (reg.test(userPhone.value)) {
      descInValid.style.display = 'none';
      sendButton.removeAttribute('disabled');
      userPhone.style.boxShadow = '0 0 5px 2px green';
    } else {
      descInValid.style.display = 'flex';
      sendButton.setAttribute('disabled', 'false');
      userPhone.style.boxShadow = '0 0 5px 2px red';
    }
  }
};

function sendBtn() {
  descValid.style.display = 'flex';
  userPhone.value = '';
  userPhone.style.boxShadow = '';
  sendButton.setAttribute('disabled', 'true');
  setTimeout(() => {
    descValid.style.display = 'none';
  }, 3000);
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const ballMove = document.querySelector('.court');
const ball = document.querySelector('.court__ball');
const score = document.querySelectorAll('.court__is-Score');
const teamGoal = document.querySelector('.court__title-teamGoal');
const title = document.querySelector('.court__title');
const disabledBlock = document.querySelector('.is-disabled');

ballMove.addEventListener('click', (e) => {
  let poleCoords = ballMove.getBoundingClientRect();
  let poleCoords2 = {
    top: poleCoords.top,
    left: poleCoords.left
  };
  ball.style.top = e.clientY - poleCoords2.top + 'px';
  ball.style.left = e.clientX - poleCoords2.left + 'px';
});

score.forEach((box) => {
  box.addEventListener('click', (e) => {
    if (e.target.classList.contains('teamA')) {
      goal('teamB');
    } else {
      goal('teamA');
    }
  });
});

function goal(team) {
  disabledBlock.style.display = 'block';
  setTimeout(() => {
    if (team === 'teamA') {
      document.querySelector('.tableScore__A').value++;
      showTeamGoal('A');
    } else {
      document.querySelector('.tableScore__B').value++;
      showTeamGoal('B');
    }
    setTimeout(() => {
      title.style.display = 'none';
      ball.style.top = '50%';
      ball.style.left = '50%';
      setTimeout(() => {
        disabledBlock.style.display = 'none';
      }, 1000);
    }, 3000);
  }, 1000);
}

function showTeamGoal(team) {
  teamGoal.innerHTML = team;
  title.style.display = 'block';
}
/* END TASK 3 */
