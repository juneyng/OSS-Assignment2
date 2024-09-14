document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.querySelector('.continue-button');
    
    // Continue to checkout 버튼 클릭 시 동작
    checkoutButton.addEventListener('click', function (event) {
      // 기본 제출 동작을 막기 위해 event.preventDefault() 사용
      event.preventDefault();
  
      // confirm 창을 띄움
      if (!confirm("제출하시겠습니까?")) {
        alert("제출을 취소하였습니다.");
        return;
      }
  
      // 유효성 검사를 위한 플래그
      let isValid = true;
  
      // div1 ~ div13 까지의 입력 필드 검사
      const fields = [
        { inputId: 'firstName', feedbackSelector: '.div1 .invalid-feedback' },
        { inputId: 'lastName', feedbackSelector: '.div2 .invalid-feedback' },
        { inputId: 'username', feedbackSelector: '.div3 .invalid-feedback' },
        { inputId: 'date', feedbackSelector: '.div4 .invalid-feedback' },
        { inputId: 'address', feedbackSelector: '.div5 .invalid-feedback' },
        { inputId: 'country', feedbackSelector: '.div7 .invalid-feedback', isSelect: true }, // select 추가
        { inputId: 'state', feedbackSelector: '.div8 .invalid-feedback', isSelect: true },  // select 추가
        { inputId: 'zip', feedbackSelector: '.div9 .invalid-feedback' },
        { inputId: 'cc-name', feedbackSelector: '.div10 .invalid-feedback' },
        { inputId: 'cc-number', feedbackSelector: '.div11 .invalid-feedback' },
        { inputId: 'cc-expiration', feedbackSelector: '.div12 .invalid-feedback' },
        { inputId: 'cc-cvv', feedbackSelector: '.div13 .invalid-feedback' }
      ];
  
      // 각 필드 검사
      fields.forEach(function (field) {
        const inputElement = document.getElementById(field.inputId);
        const feedbackElement = document.querySelector(field.feedbackSelector);
  
        // select 태그의 경우 빈 값인지 확인
        if (field.isSelect) {
          if (inputElement.value === "" || inputElement.value === null) {
            feedbackElement.style.display = 'block'; // 오류 메시지 표시
            inputElement.style.borderColor = 'red'; // 잘못된 필드 빨간색 테두리
            isValid = false; // 유효하지 않음을 플래그로 설정
          } else {
            feedbackElement.style.display = 'none'; // 입력이 있으면 오류 메시지 숨김
            inputElement.style.borderColor = 'green'; // 유효한 필드 초록색 테두리
          }
        } else {
          // 일반 input 필드가 비어있다면 invalid-feedback을 보여줌
          if (!inputElement.value) {
            feedbackElement.style.display = 'block'; // 오류 메시지 표시
            inputElement.style.borderColor = 'red'; // 잘못된 필드 빨간색 테두리
            isValid = false; // 유효하지 않음을 플래그로 설정
          } else {
            feedbackElement.style.display = 'none'; // 입력이 있으면 오류 메시지 숨김
            inputElement.style.borderColor = 'green'; // 유효한 필드 초록색 테두리
          }
        }
      });
  
      // 유효성 검사가 통과되었을 때만 폼 제출
      if (isValid) {
        alert("폼이 제출되었습니다.");
        // 여기서 폼 제출 로직을 추가할 수 있습니다.
      } else {
        alert("입력하지 않은 필드가 있습니다.");
      }
    });
  });