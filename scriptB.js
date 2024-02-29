// Dữ liệu cho các câu hỏi trắc nghiệm
var questions = [
    { question: "Câu hỏi 1", choices: ["A", "B", "C", "D"], correctAnswer: "A" },
    { question: "Câu hỏi 2", choices: ["X", "Y", "Z", "W"], correctAnswer: "Y" },
    { question: "Câu hỏi 3", choices: ["Đúng", "Sai"], correctAnswer: "Đúng" },
    { question: "Câu hỏi 4", choices: ["1", "2", "3", "4"], correctAnswer: "3" }
];

// Hàm để tạo table và hiển thị nó
function createQuizTable() {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    questions.forEach(function(question, index) {
        var tr = document.createElement("tr");

        // Tạo cột câu hỏi
        var questionTd = document.createElement("td");
        questionTd.textContent = question.question;

        // Tạo cột lựa chọn
        var choicesTd = document.createElement("td");
        question.choices.forEach(function(choice) {
            var input = document.createElement("input");
            input.type = "radio";
            input.name = "question" + index;
            input.value = choice;

            var label = document.createElement("label");
            label.textContent = choice;

            choicesTd.appendChild(input);
            choicesTd.appendChild(label);
            choicesTd.appendChild(document.createElement("br"));
        });

        tr.appendChild(questionTd);
        tr.appendChild(choicesTd);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    document.getElementById("quizTableContainer").appendChild(table);
}

// Gọi hàm tạo table khi trang HTML được tải
document.addEventListener("DOMContentLoaded", createQuizTable);
