import {faker} from '@faker-js/faker';

export function getData(rowsToMake) {
    const data = [];
    for (let x = 0; x < rowsToMake; x++) {
        data.push({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.exampleEmail(),
        });
    }
    return data;
}
