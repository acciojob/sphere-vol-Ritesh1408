function volume_sphere(event) {
    event.preventDefault(); 

    let radius = parseFloat(document.getElementById("radius").value);
    let volumeField = document.getElementById("volume");

    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN"; 
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    volumeField.value = volume.toFixed(4);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
