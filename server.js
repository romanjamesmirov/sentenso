/**
 * This function will accept details about a person
 * and return an object for them.
 * @param {string} name - The person's full name
 * @param {number} age - The person's age
 * @param {boolean} isDeveloper - Whether or not person is a developer
 * @returns {Object} The person object
 */
function createPerson(name, age, isDeveloper) {
	return { name, age, isDeveloper };
}

createPerson(4, 'yes', 0);