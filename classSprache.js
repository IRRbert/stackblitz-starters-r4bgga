// Klasse Sprache UI Version 0.0001
class classSprache {
    constructor() {
        this.createSpracheWindow(); // Erstelle das Sprachfenster
    }

    // ----------------------------- Sprache WinBox ----------------
    createSpracheWindow() {
        let htmlContent = `<div id="google_translate_element"></div>`;
        // Erstelle das Sprachfenster der WinBox zentriert
        this.spracheWindow = new WinBox({
            title: "Sprache wechseln",
            width: 230,
            height: 100,
            html: htmlContent,
            class: ["no-max", "no-full", "no-close"],
            x: "center",
            y: "center",
            
            min: true, // Fenster wird minimiert gestartet
            oncreate: () => {
                // Lade das Google Translate Skript nach Erstellung des Fensters
                const script1 = document.createElement('script');
                script1.innerHTML = `
                    function googleTranslateElementInit() {
                        new google.translate.TranslateElement({
                            pageLanguage: 'de'
                        }, 'google_translate_element');
                    }
                `;
                document.body.appendChild(script1);
                const script2 = document.createElement('script');
                script2.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.body.appendChild(script2);
            },
            onclose: () => {
                // Entferne die WinBox-Instanz, wenn das Fenster geschlossen wird
                this.spracheWindow = null;
            }
        });


        // Füge das Dimension-Fenster der Liste der auto-hide Winboxen hinzu
        SimulationEinstellungen.liste_der_auto_hide_Winboxen.push(this.spracheWindow);

    }
}

const meine_sprache = new classSprache();
