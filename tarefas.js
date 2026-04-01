const prompt =  require('prompt-sync')();

let tarefas = []; //Array vazio que vai guardar as tarefas

function mostrarMenu() {
    console.log("\n=== SISTEMA DE TAREFAS ===");
    console.log("1 - Adicionar tarefa");
    console.log("2 - Listar tarefas");
    console.log("3 - Concluir tarefa");
    console.log("4 - Remover Tarefa");
    console.log("5 - Sair");
    console.log("====================");
}

function adicionarTarefa() {
    let tarefa = prompt("Digite a tarefa: ");
    tarefas.push({ texto: tarefa, concluida: false });
    console.log("✅ Tarefa adicionada com sucesso!");
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("📭 Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("\n--- SUAS TAREFAS ---");
    for (let i = 0; i < tarefas.length; i++) {
        let status = tarefas[i].concluida ? "[✔]" : "[ ]";
        console.log((i + 1) + " - " + status + " " + tarefas[i].texto);
    }
}

function concluirTarefa() {
    listarTarefas();
    if (tarefas.length === 0) return;

    let num = parseInt(prompt("Digitar o número da tarefa concluída: ")) -1;

    if (num >= 0 && num < tarefas.length) {
        tarefas[num].concluida = true;
        console.log("🎉 Tarefa concluída! Parabéns!");
    } else {
        console.log("❌ Número inválido!");
    }   
}

function removerTarefa() {
    listarTarefas();
    if (tarefas.length ===0) return;

    let num = parseInt(prompt("Digite o número da tarefa a remover: ")) - 1;

    if (num >= 0 && num < tarefas.length) {
        tarefas.splice(num, 1);
        console.log("🗑️ Tarefa removida com sucesso!");
    } else {
        console.log("❌ Número inválido!");
    }
}


function main() {
    let opcao;

    do{
        mostrarMenu();
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                adicionarTarefa();
                break;
            case "2":
                listarTarefas();
                break;
            case "3":
                concluirTarefa();
                break;
            case "4":
                removerTarefa();
                break;
            case "5":
                console.log("👋 Até mais! Programa encerrado.");
                break;
            default:
                console.log("❌ Opção inválida! Tente novamente.");

        }

    } while (opcao !== "5");
}

//Executa o programa
main();