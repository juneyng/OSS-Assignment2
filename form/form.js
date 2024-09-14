document.addEventListener("DOMContentLoaded", function () {
    // 요소 가져오기
    const inputField = document.getElementById("input_append");
    const ul = document.getElementById("list"); // 미리 생성된 ul 요소 가져오기
    const btnRegister = document.getElementById("btn_register");
    const btnDeleteAll = document.getElementById("btn_delete_all");
  
    // 등록 버튼 이벤트 리스너
    btnRegister.addEventListener("click", function () {
      const inputValue = inputField.value.trim();
  
      if (inputValue === "") {
        return false; // 빈 값이면 리턴
      }
  
      // 입력 값을 콤마로 분리하고 각 항목을 트리밍 (앞뒤 공백 제거)
      const dataList = inputValue.split(',').map(item => item.trim());
  
      // 각 데이터 항목을 li로 추가
      dataList.forEach(data => {
        const li = document.createElement("li");
        li.textContent = data;
  
        // li를 클릭하면 삭제되는 이벤트 추가
        li.addEventListener("click", function () {
          li.remove();
        });
  
        ul.appendChild(li); // ul에 li 추가
      });
  
      // 입력 필드 초기화
      inputField.value = "";
    });
  
    // 전체 삭제 버튼 이벤트 리스너
    btnDeleteAll.addEventListener("click", function () {
      ul.innerHTML = ""; // 모든 항목 삭제
      inputField.value = ""; // 입력 필드 초기화
    });
  });
  