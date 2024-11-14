document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Variáveis de erro
    let errors = [];
    
    // Validação do Nome do Aluno
    const studentName = document.getElementById("studentName").value;
    if (studentName.trim() === "") {
        errors.push("Nome do aluno é obrigatório.");
    }

    // Validação da Data de Nascimento
    const birthDate = document.getElementById("birthDate").value;
    if (birthDate === "") {
        errors.push("Data de nascimento é obrigatória.");
    }

    // Validação do Nome da Mãe
    const motherName = document.getElementById("motherName").value;
    if (motherName.trim() === "") {
        errors.push("Nome da mãe é obrigatório.");
    }

    // Validação do DDD do Telefone
    const phoneDdd = document.getElementById("phoneDdd").value;
    if (phoneDdd.length !== 2 || isNaN(phoneDdd)) {
        errors.push("DDD do telefone deve ter 2 dígitos numéricos.");
    }

    // Validação do Número do Telefone
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phoneRegex = /^[0-9]{8,9}$/; // Aceita 8 ou 9 dígitos
    if (!phoneRegex.test(phoneNumber)) {
        errors.push("Número de telefone deve ter 8 ou 9 dígitos.");
    }

    // Validação do Email
    const email = document.getElementById("email").value;
    if (email.trim() === "") {
        errors.push("Email é obrigatório.");
    }

    // Validação da Série
    const grade = document.getElementById("grade").value;
    if (grade === "") {
        errors.push("Selecione uma série.");
    }

    // Validação do Turno
    const shift = document.querySelector("input[name='shift']:checked");
    if (!shift) {
        errors.push("Selecione um turno.");
    }

    // Exibir erros ou enviar o formulário
    if (errors.length > 0) {
        event.preventDefault(); // Impede o envio do formulário
        alert("Erros encontrados:\n" + errors.join("\n"));
    } else {
        alert("Formulário enviado com sucesso!");
    }
});
