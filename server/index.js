const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 8000;

// Your Electricity Maps API Key
const ELECTRICITY_MAPS_API_KEY = "W6g3uBFTm3IZSmiAbbPp";

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Factors (kg CO₂e per unit)
const FACTORS = {
  transport: 0.21, // per km
  food: 2.5, // per meal
};

// API endpoint to calculate the footprint
app.post("/api/calculate-footprint", async (req, res) => {
  const { electricity = 0, transport = 0, food = 0 } = req.body;

  try {
    // Fetch carbon intensity for electricity
    const response = await axios.get(
      "https://api.electricitymap.org/v3/carbon-intensity/latest?zone=IN-SO",
      {
        headers: {
          "auth-token": ELECTRICITY_MAPS_API_KEY,
        },
      }
    );

    const carbonIntensity = response.data.carbonIntensity; // gCO₂/kWh
    const electricityFootprint = (electricity * carbonIntensity) / 1000; // to kg

    // Other contributions
    const transportFootprint = transport * FACTORS.transport;
    const foodFootprint = food * FACTORS.food;

    const totalFootprint =
      electricityFootprint + transportFootprint + foodFootprint;

    console.log("Received data:", req.body);
    console.log("Electricity Intensity:", carbonIntensity);
    console.log("Total footprint:", totalFootprint);

    res.status(200).json({
      message: "Carbon footprint calculated successfully!",
      footprint: totalFootprint,
      breakdown: {
        electricity: electricityFootprint,
        transport: transportFootprint,
        food: foodFootprint,
      },
    });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(500).json({
      message: "Failed to calculate footprint from API.",
      error: error.response?.data || error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
