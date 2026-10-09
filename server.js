const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// DEMO DATA ONLY. This record is simulated and is not proof of a real shipment.
const shipments = {
  "GEL-MEXNY-061026-8Q2K": {
    trackingCode: "GEL-MEXNY-061026-8Q2K",
    company: "Worldport Express Logistics",
    demo: true,
    status: "Customs clearance pending (demo status)",
    destination: "750 To Drive Suite 205, Lake Villa, IL 60046, USA",
    events: [
      { date: "2026-10-06 18:00", location: "Mexico City International Airport, Mexico", status: "Shipment registered (simulated)", note: "Demonstration event; not verified by a carrier." },
      { date: "2026-10-06 21:00", location: "Mexico City International Airport, Mexico", status: "Departure reported (simulated)", note: "Demonstration event; actual departure has not been verified." },
      { date: "2026-10-07 08:00", location: "New York Stewart International Airport, New York, USA", status: "Arrival reported (simulated)", note: "Demonstration event; actual arrival has not been verified." },
      { date: "2026-10-07 09:00", location: "Customs review", status: "Customs clearance pending (demo status)", note: "This is a placeholder status. No customs filing or release has been verified." },
      { date: "Pending", location: "Lake Villa, Illinois, USA", status: "Delivery pending", note: "No delivery date is confirmed in this demonstration." }
    ]
  }
};

app.get("/api/track/:code", (req, res) => {
  const code = String(req.params.code || "").trim().toUpperCase();
  const shipment = shipments[code];
  if (!shipment) {
    return res.status(404).json({ error: "Tracking code not found in this demo system." });
  }
  res.json(shipment);
});

app.get("/api/health", (_req, res) => res.json({ ok: true, mode: "demo" }));

app.listen(PORT, () => {
  console.log(`Worldport Express Logistics demo running on port ${PORT}`);
});
