<script setup>
import { ref } from "vue";
import AddButton from "./components/AddButton.vue";
import DailyTask from "./components/DailyTask.vue";

const tarefas = ref([]);

const msgErro = ref("");

const novaTarefa = ref({
  nome: "",
  descricao: "",
  modalidade: "online",
  data: new Date(),
});

const resetNovaTarefa = () =>
  (novaTarefa.value = {
    nome: "",
    descricao: "",
    modalidade: "online",
    data: new Date(),
  });

const handleNovaTarefa = () => {
  if (verificarCamposPreenchidos()) {
    tarefas.value.push(novaTarefa.value);
    msgErro.value = "";
    resetNovaTarefa();
  } else {
    msgErro.value = "Preencha os campos!";
  }
};

const verificarCamposPreenchidos = () => {
  for (const valor of Object.values(novaTarefa.value)) {
    if (valor === "" || valor === null || valor === undefined) {
      return false;
    }
  }
  return true;
};
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    <header class="flex justify-center mt-4">
      <h1 class="text-xl font-bold text-[#5a5959]">
        Hoje - {{ new Date().toLocaleString("pt") }}
      </h1>
    </header>
    <div class="flex justify-center items-center">
      <form class="flex items-center flex-col mt-4">
        <div class="flex flex-col gap-4">
          <input
            v-model="novaTarefa.nome"
            type="text"
            class="p-4 outline-none shadow-md rounded-md"
            placeholder="Informe o título da tarefa"
          />
          <textarea
            v-model="novaTarefa.descricao"
            class="outline-none shadow-md p-2 rounded-md"
            placeholder="Adicione uma descrição"
          />
          <select
            v-model="novaTarefa.modalidade"
            class="outline-none shadow-md p-2 rounded-md"
          >
            <option value="online">Online</option>
            <option value="fisico">Físico</option>
          </select>
        </div>
        <p
          v-if="msgErro"
          class="flex font-bold justify-center text-sm text-red-400 mt-4"
        >
          {{ msgErro }}
        </p>
        <AddButton @click.prevent.default="handleNovaTarefa" class="mt-4" />
      </form>
    </div>
    <div class="mt-2 flex justify-center flex-col items-center w-full">
      <div class="w-6/12">
        <h1 class="flex justify-center text-lg mt-4 font-bold text-[#5a5959]">
          Tarefas Registradas:
        </h1>
        <DailyTask
          v-if="tarefas.length > 0"
          v-for="tarefa in tarefas"
          :tarefa="tarefa"
        />
        <span v-else class="text-[#5a5959] flex justify-center text-sm"
          >Nenhuma tarefa registrada :(</span
        >
      </div>
    </div>
  </div>
</template>
