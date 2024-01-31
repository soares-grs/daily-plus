<script setup>
import { dateService } from '../services/date-service';
const props = defineProps(["tarefa"]);

</script>

<template>
    <div class="p-4 shadow-xl sm:shadol-md border-1-[#252525]">
        <div class="flex flex-col gap-1">
            <p class="flex items-center gap-2 font-bold">
                <p class="text-[#5a5a5a]">Título:</p>
                 {{ tarefa.nome }}
            </p>
            <p class="flex items-center gap-2 font-bold">
                <p class="text-[#5a5a5a]">Descrição:</p> 
                {{ tarefa.descricao }}
            </p>
            <p class="flex items-center gap-2 font-bold">
                <p class="text-[#5a5a5a]">Modalidade:</p> 
                {{ tarefa.modalidade }}
            </p>
            <p class="text-[12px] sm:text-sm text-[#5a5a5a] font-bold">{{ dateService.formatarDataComHora(tarefa.data) }}</p>
        </div>
    </div>
</template>