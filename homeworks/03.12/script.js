const city = {
    name: "almaty",
    population: 2000000,
    districts: [
        { name: "almaty", population: 300000 },
        { name: "almaty", population: 2500000},
    ],
};

const schools = [
    { name: "first school", district: "almaty", students: 500 },
    { name: "second school", district: "bostandyq", students: 800 },
];

function addSchool (name, district, students) {
    schools.push({ name: "third scool", district: "almaty", students: 190});
};

const updateStudents = (schoolName, newStudent) => {
    for (let school of schools) {
        if (school.name === schoolName) {
            school.students = newStudent;
            break;
        }
    }
}

updateStudents("students", 200);


const totalPopulation = (city) => {
    let totalPopulation = city.population;
    for (const district of city.districts) {
        totalPopulation += district.population;
    }
    return totalPopulation;
};

const totalStudents = (school) => {
    let totalStudents = 0;
    for (const school of schools) {
        totalStudents += school.students;
    }
    return totalStudents;
}

const getSchoolDiscrict = (districtName) => {
    return schools.filter(school => school.district === districtName);
};

