var myself = {
    "name": "Sajedur Rahman",
    "Education": {
        "SSC": "Pabna Collectorate Public School And College",
        "HSC": "Bogura Cantonment Public School And College",
        "B.Sc": "Daffodil Internation University"
    },
    "result": {
        "SSC": "Golden GPA-5",
        "HSC": "GPA 4.92",
        "B.Sc": "3.51"
    },
    "Family": {
        "Parents": {
            "father": "Mohammad Ali Shohel",
            "mother": "Sharmin Begum",
            "sister": "Nur-a-nahrin Mim"
        }
    }
}

console.log("I got " + myself.result["SSC"] + " in my SSC examination");
console.log("My father name is " + myself.Family.Parents["father"]);
