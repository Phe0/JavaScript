let calcStudentScore = function(score, total){
    return (score * 100) / total
}

let getStudentGrade = function(grade){
    if(grade >= 90)
        return 'A'
    else if(grade >= 80)
        return 'B'
    else if(grade >= 70)
        return 'C'
    else if(grade >= 60)
        return 'D'
    else
        return 'F'
}

let score = 15
let total = 20
let percent = calcStudentScore(score, total)

console.log(`${score}/${total} -> You got a ${getStudentGrade(percent)} (${percent}%)!`)