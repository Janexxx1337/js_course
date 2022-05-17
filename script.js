const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
const nameObj = plan.name;
const expObj = plan.skills.exp;
const someStr = plan.skills.languages[0];

let str = `Меня зовут  ${nameObj}, мой опыт ${expObj} + ${someStr}`;
str = str.toUpperCase();

return str;

}


showExperience(personalPlanPeter);

