human = prompt("Salut bogoss, qu'est ce que tu racontes ?")
botAcne = ""
if (human.slice(-1) == "?" || human.split(" ").includes("?")){
    botAcne = " Ouai ouai..."
} else if (human != "" && human != " " && human === human.toUpperCase()){
    botAcne = "Pwa, reste tranquil frangin..."
} else if (human.split(" ").includes("fornite") || human.split(" ").includes("Fornite")){
    botAcne = "on s' fait une partie soum-soum ?"
} else if (human === " " || human === ""){
    botAcne = "t'es en PLS ?"
} else {
    botAcne = "T'es qui toi ? "
}
console.log(botAcne)