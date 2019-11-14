arn1 = "CCGUCGUUGCGCUACAGC"
arn2 = "CCUCGCCGGUACUUCUCG"

function split(arn){
	return arn.match(/.{1,3}/g).map(function(arn){return codon(arn)}).join("-")
}


function codon(x){
    acide =""
	if (x == "UCU" ||x == "UCC" ||x == "UCA" ||x == "UCG" ||x == "AGU" ||x == "AGC"){
		acide = "Sérine" 
	} else if (x =="CCU" ||x == "CCC" ||x == "CCA" ||x == "CCG"){
		acide =  "Proline"
	} else if (x == "UUG" ||x == "UUA"){
		acide =   "Leucine"
	} else if (x == "UUU" ||x == "UUC"){
		acide =   "Phénylalanine"
	} else if (x == "CGU" ||x == "CGC" ||x == "AGG" ||x == "CGA" ||x == "AGA"||x == "CGG"){
		acide =   "Arginine"
	}else if (x =="UAU" ||x == "UAC"){
		acide =   "Tyrosine"
	} else {
		acide =   "WTF"
	}
	return acide
}
console.log(split(arn1))
console.log(split(arn2))