function downloadLatest() {

    const latestVersion = "RelicfallSetup.exe";

    alert("Téléchargement de la dernière version (1.0)");

    window.location.href = latestVersion;
}

function downloadGame() {

    const select = document.getElementById("version-select");
    const file = select.value;

    alert("Téléchargement de " + select.options[select.selectedIndex].text);

    window.location.href = file;
}

