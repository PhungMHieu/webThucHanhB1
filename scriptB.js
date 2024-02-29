function Logout() {
    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var studentId = document.getElementById("studentId").value;
    var className = document.getElementById("class").value;

    // Kiểm tra xem các trường đã được nhập đầy đủ hay không
    if (fullName === "" || dob === "" || studentId === "" || className === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return false; // Ngăn chặn submit form nếu có trường trống
    }
    document.body.style.display = "none"
    window.location.href = "exam.html";
    // document.getElementById("sentForm").style.display = "none"
    // document.getElementById("examContainer").style.display = "block"
    // var ele = document.getElementById("message")
    // ele.innerHTML = cars.join("<br>")
}
const questions = [
    { type: 'trueFalse', question: 'Câu hỏi 1: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 2: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 3: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 4: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 5: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 6: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 7: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 8: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 9: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 10: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 31: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 12: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 13: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 14: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 15: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 16: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 17: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 18: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 19: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 20: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 21: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 22: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 23: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 24: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 25: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 26: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 27: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 28: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 29: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 30: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 31: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 32: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 33: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 34: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 35: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 36: Trả lời tự luận.' },
    { type: 'trueFalse', question: 'Câu hỏi 37: Đúng hay Sai?', answer: true },
    { type: 'multipleChoice', question: 'Câu hỏi 38: Chọn đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleSelect', question: 'Câu hỏi 39: Chọn các đáp án đúng?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'essay', question: 'Câu hỏi 40: Trả lời tự luận.' }
    // Add more questions as needed
  ];

  const quizForm = document.getElementById('quizForm');
  const questionsContainer = document.getElementById('questionsContainer');
  const resultContainer = document.getElementById('resultContainer');
  function generateQuestionHTML(question, index) {
  let html = '<div class="question">';
  html += `<p>${question.question}</p>`;
  if (question.type === 'trueFalse') {
      html += `<label><input type="radio" name="question${index}" value="true"> Đúng</label>`;
      html += `<label><input type="radio" name="question${index}" value="false"> Sai</label>`;
  } else if (question.type === 'multipleChoice') {
      question.options.forEach((option, optionIndex) => {
      html += `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`;
      });
  } else if (question.type === 'multipleSelect') {
      question.options.forEach((option, optionIndex) => {
      html += `<label><input type="checkbox" name="question${index}[]" value="${option}"> ${option}</label>`;
      });
  } else if (question.type === 'essay') {
      html += `<textarea name="essayAnswer${index}" rows="4" cols="50"></textarea>`;
  }
  html += '</div>';
  return html;
  }
  // Function to display questions
  function displayQuestions() {
      questions.forEach((question, index) => {
          const questionDiv = document.createElement('div');
          questionDiv.classList.add('question');
          questionDiv.innerHTML = generateQuestionHTML(question, index);
          questionsContainer.appendChild(questionDiv);
      });
  }

  // Function to calculate and display the result
  function showResult(event) {
    event.preventDefault();
    let score = 0;
    questions.forEach((question, index) => {
      const inputName = `question${index}`;
      const userAnswer = Array.from(document.getElementsByName(inputName))
        .filter(input => input.checked || input.type === 'textarea')
        .map(input => input.type === 'textarea' ? input.value : input.value);
      
      if (JSON.stringify(userAnswer) === JSON.stringify(question.answer)) {
        score++;
      }
    });
    const totalQuestions = questions.length;
    const resultPercentage = (score / totalQuestions) * 100;
    resultContainer.innerHTML = `<p>Tổng số câu hỏi: ${totalQuestions}</p>`;
    resultContainer.innerHTML += `<p>Số câu đúng: ${score}</p>`;
    resultContainer.innerHTML += `<p>Tỉ lệ: ${resultPercentage.toFixed(2)}%</p>`;
  }

  // Display questions when the page loads
  displayQuestions();

  // Add event listener to the form for submitting the quiz
  quizForm.addEventListener('submit', showResult);
