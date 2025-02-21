document.addEventListener("DOMContentLoaded", function () {
    let soruAlani = document.getElementById("soruAlani");
    let sidebar = document.querySelector(".sidebar ul");

   
    sorular.forEach((soru, index) => {
        let questionNumber = index + 1;

       
        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        if (index === 0) questionDiv.classList.add("active"); 
        questionDiv.id = `question${questionNumber}`;

        // Soru içeriğime dokunma
        questionDiv.innerHTML = `
            <label for="input${questionNumber}">
                <span class="soru-numarasi">${questionNumber}</span>
                <i class="fa-solid fa-arrow-right-long"></i>
                ${soru.soruMetni}
            </label>
            <input type="text" id="input${questionNumber}" placeholder="Cevabınızı buraya yazın">
            <button onclick="nextQuestion(${questionNumber})">${questionNumber === sorular.length ? 'Gönder' : 'Sonraki'}</button>
        `;
        soruAlani.appendChild(questionDiv);

        
        let stepItem = document.createElement("li");
        stepItem.id = `step${questionNumber}`;
        stepItem.innerHTML = `
            <i class="fa-solid ${soru.icon}"></i> ${questionNumber}  <hr>  ${soru.soruMetni}
        `;
        stepItem.onclick = () => goToQuestion(questionNumber);
        sidebar.appendChild(stepItem);
    });
});


function nextQuestion(current) {
    document.getElementById(`question${current}`).classList.remove('active');
    document.getElementById(`step${current}`).classList.remove('active');

    const next = current + 1;
    const nextQuestion = document.getElementById(`question${next}`);
    if (nextQuestion) {
        nextQuestion.classList.add('active');
        document.getElementById(`step${next}`).classList.add('active');
    } else {
        alert("Form tamamlandı!");
    }
}


function goToQuestion(step) {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));

    document.getElementById(`question${step}`).classList.add('active');
    document.getElementById(`step${step}`).classList.add('active');
}