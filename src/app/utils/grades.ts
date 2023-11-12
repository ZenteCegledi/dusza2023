
export function fitIntoGrades(value: number): Grade {
    if (value < 5) {
        return 5;
    } else if (value > 8) {
        return 8;
    } else {
        return value as Grade;
    }
}
