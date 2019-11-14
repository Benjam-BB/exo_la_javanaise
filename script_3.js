number = prompt("Salut Pharaon, tu veux une pyramide de combien d'étages?");

function pyramid(number){
    marche = "#";
    space = " ";
    count = 1;
    while (count <= number ){
        console.log(space.repeat(number - count) + marche.repeat(count));
        count ++ ;
    }
}
pyramid(number);
