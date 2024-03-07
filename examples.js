//EX07 E EX08
class Animal {
    constructor(nome, idade){
        //CONSTRUTOR DO OBJETO COM O NOME E IDADE
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} ano(s)` //RETORNA O NOME E IDADE COM BASE NO INPUT DO OBJETO, COM OS DADOS PEGO NO CONSTRUTOR
    }
}
const gato = new Animal("Gabriel", 18) //CRIA UM NOVO OBJETO GATO DA CLASSE ANIMAL COM O NOME GABRIEL E IDADE 18
const cachorro = new Animal("OutroQualquer", 4) //CRIA UM OUTRO OBJETO TAMBÉM DA CLASSE ANIMAL
console.log(gato.descrever())
console.log(cachorro.descrever()) //CHAMA A FUNÇÃO DESCREVER QUE RETORNA UMA STRING QUE É EXIBIDA NO CONSOLE

class Gato extends Animal {
    constructor(nome, idade, cor){
        //COLOCA UM NOVO CONSTRUTOR PARA O GATO, PEGANDO A COR E USANDO TAMBÉM O CONSTRUTOR DA CLASSE ANTIGA, PARA TER O NOME E IDADE
        super(nome, idade)
        this.cor = cor
    }
    descrever(){
        //RETORNA A DESCRIÇÃO DO GATO COM O NOME, IDADE E COR - SOBRESCREVE O MÉTODO DESCREVER DA CLASSE ANIMAL
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} ano(s) e minha cor é ${this.cor}`
    }
    miar(){
        //MÉTODO QUE RETORNA O MIADO DO GATO
        return `MIAUUUUUUUUUUUUUUUUUUUU!`
    }
}
const cachorro2 = new Animal("OutroQualquer", 7) //CRIA O OBJETO CACHORRO DA CLASSE ANIMAL
const gato2 = new Gato("Gabriel", 10, "Cinza Escuro") //CRIA O OBJETO GATO2 DA CLASSE GATO QUE ESTENDE A CLASSE ANIMAL
console.log(gato2.descrever())
console.log(gato2.miar())
console.log(cachorro2.descrever())
//CHAMA OS MÉTODOS DESCREVER E DE MIAR DOS OBJETOS


//EX9
class SomadorDeNotas {
    //CRIA A CLASSE SOMADOR DE NOTAS
    constructor(){
        //NO CONTADOR COLOCA DOIS PARAMETROS PARA CRIAR O OBJETO
        this.total = 0
        this.contador = 0
    }
    adicionarNota(nota){
        //RECEBE UMA NOTA COMO PARAMETRO E SOMA ELA NO VALOR ATUAL DE TOTAL, ALÉM DISSO ADICIONA UM NO CONTADOR PARA CALCCULAR A MÉDIA DEPOIS 
        this.total += nota
        this.contador++
        return {
            success: true
        } //RETORNA UMA MENSAGEM DE SUCESSO, SOMENTE PARA RETORNAR ALGO CASO COLOQUE ELA DENTRO DE UM CONSOLE.LOG
    }
    getTotal(){
        return this.total; //RETORNA A SOMA TOTAL DAS NOTAS
    }
    getMedia(){
        return this.total / this.contador; //CALCULA A MÉDIA COM BASE NAS NOTAS SOMADAS ATÉ O MOMENTO E COM BASE NA VARIÁVEL CONTADOR QUE SOMA UM CADA VEZ QUE ADICIONAMOS UMA NOTA
    }
}
const notas = new SomadorDeNotas() //CRIA O OBJETO DE NOTAS
notas.adicionarNota(10)
notas.adicionarNota(8)
notas.adicionarNota(8.4)
notas.adicionarNota(9.2)
//SOMA VÁRIAS NOTAS NO OBJETO
console.log(`Sua somatória deu ${notas.getTotal()} e sua média ${notas.getMedia()}`) //RETORNA A SOMA E A MÉDIA


//EX10
class Funcionario {
    //CLASSE FUNCIONARIO
    constructor(nome, idade, salarioBase){
        //RECEBE OS PARAMETROS DO OBJETO FUNCIONARIO
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }
    //RETIREI O MÉTODO CALCULAR SALÁRIO POR SER DIFERENTE PARA CADA FUNCIONÁRIO
}
class Professor extends Funcionario {
    //CLASSE PROFESSOR QUE HERDA CARACTERISTICAS DA CLASSE FUNCIONARIO
    constructor(nome, idade, salarioBase, disciplina, horasDeAulaPorSemana){ //CONSTRUTOR DO OBJETO PROFESSOR PARA PEGAR AS INFORMAÇÕES
        super(nome, idade, salarioBase); //PEGA TAMBÉM O CONSTRUTOR DA CLASSE PAI (FUNCIONARIO)
        this.disciplina = disciplina;
        this.horasDeAulaPorSemana = horasDeAulaPorSemana;
    }
    calcularSalario(){
        return this.horasDeAulaPorSemana * this.salarioBase //RETORNA O CÁLCULO DO SALÁRIO SEMANAL
    }
    descrever(){
        //RETORNA CARACTERISTICAS. USA A TEMPLATE STRING PARA 'DESCREVER' O PROFESSOR, FALANDO O NOME, IDADE, ÁREA E SEU SALÁRIO SEMANAL
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos. Atuo na área de ${this.disciplina} e meu salário é ${this.calcularSalario()} por semana`
    }
}

const cris = new Professor("Cristiano", 18, 120, "Programação", 6)
const goNoGo = new Professor("Cláudio", 18, 120, "Orientação", 10)
//CRIA O OBJETO DOS PROFESSORES E DESCREVE LOGO ABAIXO
console.log(cris.descrever())
console.log(goNoGo.descrever())