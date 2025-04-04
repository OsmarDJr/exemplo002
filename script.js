document.addEventListener("DOMContentLoaded", function () {
    // Criando o Medidor Circular (Radial Gauge)
    var gaugeRadial = new RadialGauge({
        renderTo: 'radialGauge',
        width: 300,
        height: 300,
        minValue: 0,
        maxValue: 100,
        majorTicks: ["0", "20", "40", "60", "80", "100"],
        minorTicks: 2,
        strokeTicks: true,
        highlights: [
            { from: 80, to: 100, color: "rgba(200, 50, 50, .75)" }
        ],
        needleType: "arrow",
        needleWidth: 4,
        needleCircleSize: 10,
        needleCircleOuter: true,
        animationDuration: 1500
    }).draw();

    // Criando o Medidor Linear
    var gaugeLinear = new LinearGauge({
        renderTo: 'linearGauge',
        width: 160,
        height: 600,
        minValue: 0,
        maxValue: 100,
        majorTicks: ["0", "20", "40", "60", "80", "100"],
        minorTicks: 2,
        strokeTicks: true,
        colorPlate: "#fff",
        animationDuration: 1500
    }).draw();

    // Atualizar os valores dos medidores a cada 5 segundos (simulação)
    setInterval(() => {
        let randomValue = Math.floor(Math.random() * 101); // Número aleatório entre 0 e 100

        gaugeRadial.value = randomValue;
        gaugeLinear.value = randomValue;

        // Atualiza o Display Digital (Orbitron)
        document.getElementById("digitalGauge").textContent = randomValue + " °C";

        // Atualiza o Display de 7 Segmentos
        //document.getElementById("digitalGauge2").textContent = String(randomValue).padStart(3, "0");
        // Atualiza o Display de 7 Segmentos
        let display7Segment = document.getElementById("digitalGauge2");
        display7Segment.textContent = String(randomValue).padStart(3, "0");

        // 🔥 Mudança de cor baseada no valor
        if (randomValue < 40) {
            display7Segment.style.color = "lightgreen";  // 🟢 Verde
        } else if (randomValue < 80) {
            display7Segment.style.color = "rgb(248, 212, 31)"; // 🟡 Amarelo
        } else {
            display7Segment.style.color = "red";    // 🔴 Vermelho
        }
        
        
        // Atualiza o <meter>
        document.getElementById("meterGauge").value = randomValue;

    }, 5000);
});
