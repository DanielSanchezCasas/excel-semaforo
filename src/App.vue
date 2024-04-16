<script setup>
import { ref } from 'vue';
import { descargarIndicadores } from './utils/exportIndicadoresExcel';

let datos = ref(null);

function cargarDatos() {
  fetch('../data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      datos.value = data;
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
}

function verificarColorFondo(data) {
  switch (true) {
    case data === 100:
      return "bg-green-500 text-black";
    case data >= 80 && data <= 99:
      return "bg-yellow-300 text-black";
    case data < 80:
      return "bg-red-400 text-white";
    default:
      break;
  }
}

function descargarExcel(){
  descargarIndicadores(datos.value, "Prueba");
}

cargarDatos();
</script>

<template>
  <div class="bg-black w-screen h-screen flex flex-col  items-center">
    <div class="p-20">
      <div @click="descargarExcel" class="bg-lime-500 text-black rounded-lg hover:bg-lime-600 p-2 cursor-pointer">
        Descargar Excel</div>
    </div>
    <div class="w-full overflow-hidden shadow-xs mt-8 p-10">
      <div class="w-full overflow-auto h-full rounded-lg">
        <table class="w-full whitespace-no-wrap ">
          <thead class="sticky top-0 bg-gray-50 z-10">
            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b">
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Nombre</th>
              <th class="px-4 py-3">Edad</th>
              <th class="px-4 py-3">Género</th>
              <th class="px-4 py-3">Diagnóstico</th>
              <th class="px-4 py-3">Fecha de Prescripción</th>
              <th class="px-4 py-3">Presión Sanguínea</th>
              <th class="px-4 py-3">Ritmo Cardíaco</th>
              <th class="px-4 py-3">Nombre del Doctor</th>
              <th class="px-4 py-3">Nombre del Hospital</th>
              <th class="px-4 py-3">Semáforo</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="(item, index) in datos" :key="index" class="text-gray-700">
              <td class="px-4 py-3 bg-white ">{{ item.patient_id }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.patient_name }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.patient_age }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.patient_gender }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.diagnosis }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.prescription_date }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.blood_pressure }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.heart_rate }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.doctor_name }}</td>
              <td class="px-4 py-3 bg-white ">{{ item.hospital_name }}</td>
              <td class="px-4 py-3" :class="verificarColorFondo(item.semaforo)">{{ item.semaforo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>

</template>

<style scoped></style>
