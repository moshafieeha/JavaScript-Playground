/*
 This script performs various operations on user data. The operations include:
 
  1. Reading all the elements in the `userData` array.
     - Function: read
     - Description: This function prints all elements in the `userData` array.
 
  2. Creating a new object and adding it to the `userData` array, ensuring the `uid` is unique.
     - Function: create
     - Description: This function receives an object as input and adds it to the `userData` array.
       If the `uid` is unique, it prints a success message. If the `uid` is not unique, it prints an error message.
 
  3. Updating an object in the `userData` array based on the `uid`.
     - Function: update
     - Description: This function takes an object and updates the object in the `userData` array based on the `uid`.
       If the object exists, it updates the object and prints a success message. If the object does not exist,
       it prints an error message.
 
  4. Removing an object from the `userData` array based on the `uid`.
     - Function: remove
     - Description: This function takes a `uid` and removes the object from the `userData` array based on the `uid`.
       It prints a success message upon successful removal.
 
  Additionally, this script merges two arrays `personData` and `additionalPersonData` based on the `uid`
  and stores the result in an array named `userData`.
*/

// Merging two arrays by a common property
const userData = personData.map((person) => ({
  //Second one override on common properties with the fisrt one
  ...person,
  ...additionalPersonData.find((data) => data.uid === person.uid),
}));

/////////////////////// READ ///////////////////////
const read = function () {
  console.table(userData);
};

// read()

/////////////////////// CREATE //////////////////////
const create = (newUser) => {
  // Validation (Check the type/nullity of input)
  if (
    typeof newUser !== "object" ||
    Array.isArray(newUser) ||
    newUser === null
  ) {
    return "Invalid input type";
  }

  // Sanitization (Check the type/nullity of properties)
  // Expected keys and their types
  const expectedKeys = {
    firstName: "string",
    lastName: "string",
    city: "string",
    position: "string",
    uid: "string",
  };

  const inputKeys = Object.keys(newUser);

  for (const key of Object.keys(expectedKeys)) {
    // Check for missing keys
    // If newUser does not have a key that is expected (e.g. firstName).
    if (!inputKeys.includes(key)) {
      return `Invalid input (missing key: ${key})`;
    }

    // Check for falsy values
    // If a key exists but its value is falsy (e.g. newUser.firstName is "" or null).
    if (!newUser[key]) {
      return `Invalid input (falsy value for key: ${key})`;
    }

    // Check for type correctness
    if (typeof newUser[key] !== expectedKeys[key]) {
      return `Invalid input (expected ${key} to be of type ${expectedKeys[key]})`;
    }
  }

  // Check for duplicate user
  const duplicateUser = userData.find((user) => user.uid === newUser.uid);
  if (duplicateUser) return "Duplicated user!";

  // Create user data
  userData.push(newUser);

  return `User (${newUser.uid}) created successfully.`;
};

/////////////////////// UPDATE //////////////////////
const update = (uid, modifiedUser) => {
  // Validation
  if (typeof uid !== "number") {
    return "Invalid input type (uid)";
  }

  if (
    typeof modifiedUser !== "object" ||
    Array.isArray(modifiedUser) ||
    modifiedUser === null
  ) {
    return "Invalid input type (modifiedUser)";
  }

  // Sanitization (No length checking in update, do not force user to input all fields)
  // Get the expected keys from the first user object (DIFFERENT FROM CREATE)
  const firstUser = userData[0];

  // Extract expected keys and their types from the first user object
  const expectedKeys = Object.keys(firstUser).reduce((types, key) => {
    types[key] = typeof firstUser[key];
    return types;
  }, {});

  // Check for valid keys and non-falsy values in modifiedUser (DIFFERENT FROM CREATE)
  for (const key in modifiedUser) {
    /*
     For checking property existence in objects, hasOwnProperty is generally the preferred
     due to its efficiency and specificity in checking direct properties.
     Using Object.keys(obj).includes(prop) can be useful in certain contexts,
     particularly when dealing with arrays, but it is less efficient and
     should be avoided for performance-critical operations.
    */
    if (!expectedKeys.hasOwnProperty(key)) {
      return `Invalid input (unexpected key: ${key})`;
    }

    const value = modifiedUser[key];
    if (!value || typeof value !== expectedKeys[key]) {
      return `Invalid input (expected ${key} to be of type ${expectedKeys[key]} and not falsy)`;
    }
  }


  // Find the target user
  const targetUser = userData.find((user) => user.uid === uid);
  if (!targetUser) {
    return `User (uid: ${uid}) not found!`;
  }

  // Check for UID duplication if modifiedUser.uid is present, not falsy and different
  if (modifiedUser.uid && uid !== modifiedUser.uid) {
    const duplicateUser = userData.find(
      (user) => user.uid === modifiedUser.uid
    );
    if (duplicateUser) {
      return "Duplicated user!";
    }
  }

  // Update user data (Override with spread oprator)
  userData = userData.map((user) =>
    user.uid === uid ? { ...user, ...modifiedUser } : user
  );

  return `Updated (uid: ${uid}) successfully.`;
};

/////////////////////// DELETE //////////////////////
const remove = (uid) => {
  // Validation
  if (typeof uid !== "number") {
    return "Invalid input type (uid)";
  }

  // Find the target user
  const targetUserIndex = userData.findIndex((user) => user.uid === uid);
  if (targetUserIndex === -1) {
    return `User (uid: ${uid}) not found!`;
  }

  // Remove user data
  /*
   Using splice is more efficient for removing a single user identified by uid.
   It allows for a direct modification of the array without the overhead of creating a new array.
  */
  userData.splice(targetUserIndex, 1);

  return `User (uid: ${uid}) deleted successfully.`;
};
