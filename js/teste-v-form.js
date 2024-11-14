//Algumas Etapas de validação
//2 - validação de entrada
//3 - validação de campos obrigatórios
//3 - Validação de Formato
//4 - validação de comprimento


//Função que valida os campos
function validarCampos() {
    //Validação de entrada. Obter os campos de nome pelos seus IDs
    const nomeAluno = document.getElementById("nomeAluno");
    const nomeMae = document.getElementById("nomeMae");
    //const nomePai = document.getElementById("nomePai");
    
    // Validar apenas letras e espaços nos nomes
    const nomePattern = /^[a-zA-ZÀ-ÿ\s]+$/;

    
    ////validação de campos obrigatórios - Verificar se os campos de nome estão preenchidos e com o formato correto
    if (!nomeAluno.value || !nomePattern.test(nomeAluno.value)) {
        alert("Por favor, insira um nome válido para o Aluno.");
        return false; // Impede o envio
    }
    
    if (!nomeMae.value || !nomePattern.test(nomeMae.value)) {
        alert("Por favor, insira um nome válido para a Mãe.");
        return false; // Impede o envio
    }

    /*if (nomePai.value || !nomePattern.test(nomePai.value)) {
        alert("Por favor, insira um nome válido para o Pai.");
        return false; // Impede o envio
    }*/
    if(emailAluno.value || nomePattern.test(emailAluno.value)){
        alert("Por favor, insira um email válido para o aluno.");
        return false; // Impede o envio
    }
    validarUsuario();
    return true; // Todos os campos de nome estão válidos
}

function validarUsuario(){
    let emailUsuario = document.getElementById("emailUsuario");
    let senhaUsuario = document.getElementById("senhaUsuario");


    // Validar endereço de email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        /* 
        Um padrão de email deve garantir que:
        O email tenha uma parte inicial com letras, números ou alguns caracteres permitidos (., _, -).
        Haja um símbolo @.
        Tenha um domínio com letras e/ou números.
        Finalize com uma extensão de domínio (como .com, .org, etc.).
    */

    //Validar senha
    const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    /*
        Um padrão de senha pode variar conforme os requisitos de segurança. Um exemplo comum exige:

        Pelo menos uma letra minúscula.
        Pelo menos uma letra maiúscula.
        Pelo menos um número.
        Pelo menos um caractere especial (!@#$%^&*, etc.).
        Um mínimo de 8 caracteres.
    */ 

        if (emailUsuario.value || !emailPattern.test(emailUsuario.value)) {
            alert("Por favor, insira um email válido.");
            return false; // Impede o envio
        }
        if(senhaUsuario.value || senhaPattern.test(senhaUsuario.value)){
            alert("Por favor, insira uma senha válida para o usuário.");
            return false; // Impede o envio
        }
    
        return true; // Todos os campos de nome estão válidos
}
