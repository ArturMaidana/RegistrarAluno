function registrarAluno() {
    // Solicitar ao usuário que insira os dados
    var nome = prompt("Digite o nome do aluno:");
    var idade = prompt("Digite a idade do aluno:");
    var curso = prompt("Digite o curso do aluno:");
    var dataNascimento = prompt("Digite a data de nascimento do aluno (no formato dd/mm/aaaa):");
    
    var notas = [];
    var disciplinas = ["Matemática", "Ciências", "História", "Geografia"];
    
    // Solicitar as notas para cada disciplina
    for (var i = 0; i < disciplinas.length; i++) {
      var nota = parseFloat(prompt("Digite a nota do aluno em " + disciplinas[i] + ":"));
      notas.push(nota);
    }
    
    // Calcular a média final do aluno
    var somaNotas = 0;
    for (var i = 0; i < notas.length; i++) {
      somaNotas += notas[i];
    }
    var mediaFinal = somaNotas / notas.length;
    
    // Criar um objeto aluno com os dados inseridos
    var aluno = {
      nome: nome,
      idade: idade,
      curso: curso,
      dataNascimento: dataNascimento,
      notas: notas,
      mediaFinal: mediaFinal
    };
    
    // Exibir as informações do aluno
    console.log("Informações do aluno:");
    console.log("Nome: " + aluno.nome);
    console.log("Idade: " + aluno.idade);
    console.log("Curso: " + aluno.curso);
    console.log("Data de Nascimento: " + aluno.dataNascimento);
    console.log("Notas: " + aluno.notas.join(", "));
    console.log("Média Final: " + aluno.mediaFinal);
    
    // Retornar o objeto aluno
    return aluno;
  }
  
  // Exemplo de uso da função
  var alunoRegistrado = registrarAluno();
  