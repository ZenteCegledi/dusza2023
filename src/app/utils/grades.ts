
export function fitIntoGrades(value: number): Grades {
    if (value < 5) {
        return 5;
    } else if (value > 8) {
        return 8;
    } else {
        return value as Grades;
    }
}
