function darkmodeGo () {
    const darkModeToggle = document.getElementById('dn'); // 체크박스 정의

    if (!darkModeToggle) {
        return !1
    } // 체크 박스 없을 시 작동 종료

    const Realbody = document.querySelector('body');
    darkModeToggle.addEventListener('change', function(event) {//체크박스의 변화 감지 리스너
      if (!Realbody.classList.contains('darkmode')) { // 바디에 다크모드 클래스가 없으면
        Realbody.classList.add('darkmode'); // 다크모드 추가
        localStorage.setItem('whatMode', darkModeToggle.checked); //whatMode라는 이름의 아이템에 체크박스의 체크 여부를 저장하기     
   }
      else { // 바디에 다크모드 클래스가 있으면
        Realbody.classList.remove('darkmode'); // 다크모드 클래스를 제거
        localStorage.setItem('whatMode', darkModeToggle.checked); //whatMode라는 이름의 아이템에 체크박스의 체크 여부를 저장하기     
      }
    })
  }

  darkmodeGo ()
  
  document.addEventListener('DOMContentLoaded',function(){
    const Realbody = document.querySelector('body');
  const whatMode = localStorage.getItem('whatMode'); //whatMode 아이템 값 불러오기
  
   if (whatMode === "false") { // 체크 여부가 false라면, 라이트모드입니다. 이 때 false는 문자열 타입이므로 "" 안에 적어야 합니다.
     return !1; // 라이트모드이므로 아무런 행동을 할 필요가 없습니다.
   }  
    else { // 다크모드라면 
      const darkModeToggle = document.getElementById('dn'); //체크박스를 획득
      darkModeToggle.checked = true; // 체크박스에 체크를 해주기
      Realbody.classList.add('darkmode'); // 다크모드를 body에 걸어주기
    }
  })



var index = 0;   //이미지에 접근하는 인덱스
window.onload = function(){
    slideShow();
}

function slideShow() {
    var i;
    var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index++;
    
    if (index > x.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }   
    x[index-1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow, 4000);   //함수를 4초마다 호출
}