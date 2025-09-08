<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Chart.js imports
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const electricity = ref(0)
const transport = ref(0)
const food = ref(0)

const footprint = ref(null)
const breakdown = ref({ electricity: 0, transport: 0, food: 0 })

const chartData = ref({
  labels: ['Electricity', 'Transport', 'Food'],
  datasets: [
    {
      label: 'Carbon Footprint',
      data: [0, 0, 0],
      backgroundColor: ['#42b983', '#ff6384', '#36a2eb']
    }
  ]
})

const calculateFootprint = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/calculate-footprint', {
      electricity: electricity.value,
      transport: transport.value,
      food: food.value
    })

    footprint.value = response.data.footprint
    breakdown.value = response.data.breakdown

    // Update chart
    chartData.value.datasets[0].data = [
      breakdown.value.electricity,
      breakdown.value.transport,
      breakdown.value.food
    ]
  } catch (error) {
    console.error('Error calculating footprint:', error)
    alert('Failed to calculate footprint. Please check the server.')
  }
}
</script>

<template>
  <div class="home">
    <h1>Carbon Footprint Tracker</h1>
    <form @submit.prevent="calculateFootprint">
      <div class="input-group">
        <label>Electricity Usage (kWh):</label>
        <input type="number" v-model.number="electricity" required />
      </div>

      <div class="input-group">
        <label>Transport (km):</label>
        <input type="number" v-model.number="transport" required />
      </div>

      <div class="input-group">
        <label>Food (meals/week):</label>
        <input type="number" v-model.number="food" required />
      </div>

      <button type="submit">Calculate</button>
    </form>

    <div v-if="footprint !== null" class="results">
      <h2>Your Estimated Carbon Footprint:</h2>
      <p>{{ footprint.toFixed(2) }} kg CO₂e</p>

      <!-- Chart -->
      <Pie :data="chartData" />
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.input-group {
  margin-bottom: 15px;
}
button {
  padding: 8px 16px;
  border: none;
  background: #42b983;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
.results {
  margin-top: 20px;
}
</style>
