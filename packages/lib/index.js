Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const answers = [
    "Ich habe gerade keine Zeit",
    "Ich habe soeben gekündigt",
    "Ich habe gegoogelt und da gab es ein Bilderergebnis für",
    "Da bin ich am Monbtag nichtmehr zuständig für und möchte jetzt auch nix mehr angfangen.",
    "Ich kann Ihren Antrag leider nicht bearbeiten, da Sie nicht alle erforderlichen Unterlagen eingereicht haben.",
    "Ihre Anfrage ist leider nicht klar formuliert. Bitte präzisieren Sie Ihr Anliegen.",
    "Aufgrund des hohen Arbeitsaufkommens kann ich Ihre Anfrage nicht sofort bearbeiten.",
    "Ihr Anliegen liegt außerhalb unseres Zuständigkeitsbereichs. Bitte wenden Sie sich an die zuständige Stelle.",
    "Die Informationen, die Sie suchen, finden Sie auf unserer Website. Bitte sehen Sie dort nach.",
    "Wir haben Ihre Anfrage bereits bearbeitet und beantwortet. Bitte überprüfen Sie Ihre E-Mails.",
    "Ich bin nicht befugt, diese Informationen herauszugeben. Bitte wenden Sie sich an meinen Vorgesetzten.",
    "Ihre Anfrage ist unangemessen und wird daher von uns nicht weiter bearbeitet.",
    "Ich bin der falsche Ansprechpartner für Ihr Anliegen. Bitte wenden Sie sich an die entsprechende Abteilung.",
    "Die Bearbeitung Ihrer Anfrage nimmt mehr Zeit in Anspruch als erwartet. Bitte haben Sie Geduld.",
    "Bitte wiederholen Sie Ihre Anfrage zu einem späteren Zeitpunkt. Ich kann sie im Moment nicht bearbeiten.",
    "Ihr Anliegen ist leider nicht prioritär. Bitte haben Sie Verständnis, dass wir dringendere Anfragen zuerst bearbeiten.",
    "Aufgrund von Datenschutzgründen kann ich Ihre Anfrage leider nicht bearbeiten.",
    "Es scheint, dass Sie sich mit Ihrer Anfrage an die falsche Abteilung gewandt haben. Bitte leiten Sie Ihre Anfrage an die zuständige Stelle weiter."
];

function getIHKAnswer(identifier) {
    return answers.random()
}
