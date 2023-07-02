
const selectBtn = document.querySelector('.budgetSearchBtn')
const resultData = document.querySelector('.result')


selectBtn.addEventListener('click', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 중지
  
    const selectedBudget = document.getElementById('budget').value;
    console.log(selectedBudget);
  
    sendDataToServer(selectedBudget);
  });

async function sendDataToServer(selectedBudget) {
    console.log(selectedBudget)

    const url = 'https://port-0-api-20zynm2mljlheog6.sel4.cloudtype.app/'; 
    const data={
        budget : selectedBudget,
    };
    switch (selectedBudget) {
        case "Low":
            data.budget = "1,000만원~ 2,000만원 예산으로 구할 수 있는 서울의 예식장 업체명을 알려줘"
            break;

        case "Mid":
            data.budget = "2,000만원~ 3,000만원 예산으로 구할 수 있는 서울의 예식장 업체명을 알려줘"
            
        break;
        case "High":
            data.budget = "3,000만원~ 4,000만원 예산으로 구할 수 있는 서울의 예식장 업체명을 알려줘"
        break;
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('서버로부터 응답을 받지 못했습니다.');
      }
  
      const responseData = await response.json();
      console.log('응답 데이터:', responseData);
      console.log('응답 데이터:', responseData.assistant.content);
      resultData.innerHTML = responseData.assistant.content;
    } catch (error) {
      console.error('오류가 발생했습니다:', error);
    }
}
 

  