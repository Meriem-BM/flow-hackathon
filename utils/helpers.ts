export const formatSalary = (salary: number, devise: string) => {

    if (salary >= 1000000) {
        return `${salary / 1000000} M${devise}`;
    } else if (salary >= 1000) {
        return `${salary / 1000} K${devise}`;
    } else {
        return `${salary} ${devise}`;
    }
};