function core() {
  let dateList = document.querySelectorAll('.date');
  let titles = document.querySelectorAll('.archive-month');
  let dateListMap = [];
  let years = [];
  let firstTitleFlag = true;
  dateList.forEach(date => {
    dateListMap.push({
      'year': Number(date.innerText.slice(1, 5)),
      'month': Number(date.innerText.slice(6, 8))
    });
  });
  dateListMap.forEach(date => {
    if (!years.includes(date.year)) {
      years.push(date.year)
    }
  });
  years.forEach(year => {
    generateTitles(dateListMap, titles, year, firstTitleFlag);
  });
}

function generateTitles(dateListMap, titles, year, firstTitleFlag) {
  let months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  dateListMap.forEach((date, i) => {
    if (date.year === year) {
      if (months[date.month - 1]) {
        if (firstTitleFlag) {
          titles[i].innerHTML = `<h4 class='first-title'>${date.year}. ${months[date.month - 1]}</h4>`;
          months[date.month - 1] = null;
        } else {
          titles[i].innerHTML = `<h4>${date.year}. ${months[date.month - 1]}</h4>`;
          months[date.month - 1] = null;
        }
      }
    }
    firstTitleFlag = false;
  });
}

core();
