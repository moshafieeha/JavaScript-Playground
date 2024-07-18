const fs = require("fs");
// const emailData = fs.readFileSync("emails.json", "utf8");
// const emails = JSON.parse(emailData);

// // Function to count Yahoo and Gmail emails
// function countEmails(emails) {
//   let yahooCount = 0;
//   let gmailCount = 0;

//   for (let email of emails) {
//     if (email.includes("@yahoo.com")) {
//       yahooCount++;
//     } else if (email.includes("@gmail.com")) {
//       gmailCount++;
//     }
//   }

//   console.log(yahooCount);
//   console.log(gmailCount);
// }

// countEmails(emails);
// //////////////////////////////////////////////////////////////////////////////

// // Function to show longest emails
// function longestEmail(emails) {
//   let maxLength = 0;
//   let longestEmails = [];

//   for (let email of emails) {
//     if (email.length > maxLength) {
//       maxLength = email.length;
//       longestEmails = [email];
//     } else if (email.length === maxLength) {
//       longestEmails.push(email);
//     }
//   }
//   console.log(longestEmails.join(", "));
// }

// longestEmail(emails);
// //////////////////////////////////////////////////////////////////////////////

// // Function to show shortest emails
// function shortestEmail(emails) {
//   let minLength = Infinity;
//   let shortestEmails = [];

//   for (let email of emails) {
//     if (email.length < minLength) {
//       minLength = email.length;
//       shortestEmails = [email];
//     } else if (email.length === minLength) {
//       shortestEmails.push(email);
//     }
//   }
//   console.log(shortestEmails.join(", "));
// }

// shortestEmail(emails);
// //////////////////////////////////////////////////////////////////////////////

// // Function to filter Gmail without numbers
// function gmailWithoutNu(emails) {
//   let gmailWithoutNumbers = [];

//   for (let email of emails) {
//     if (email.includes("@gmail.com")) {
//       let hasNumber = false;
//       for (let char of email) {
//         if (char >= "0" && char <= "9") {
//           hasNumber = true;
//           break;
//         }
//       }
//       if (!hasNumber) {
//         gmailWithoutNumbers.push(email);
//       }
//     }
//   }
//   console.log(gmailWithoutNumbers.join(", "));
// }
// gmailWithoutNu(emails);
//////////////////////////////////////////////////////////////////////////////

const userData = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(userData);

// A function to get info of owner with max balance
function maxBalanceUser(users) {
  let maxBalance = 0;
  let target = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].balance > maxBalance) {
      maxBalance = users[i].balance;
      target = users[i];
    }
  }
  return {
    jobTitle: target.jobTitle,
    country: target.country,
  };
}

console.log(maxBalanceUser(users));
//////////////////////////////////////////////////////////////////////////////

// A function to get info of owner with min balance
function minBalanceUser(users) {
  let minBalance = Infinity;
  let target = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].balance < minBalance) {
      minBalance = users[i].balance;
      target = users[i];
    }
  }
  return {
    jobTitle: target.jobTitle,
    country: target.country,
  };
}

console.log(minBalanceUser(users));
//////////////////////////////////////////////////////////////////////////////

// A function to get youngest, oldest and average age
function ageStats(users) {
  const currentDate = new Date();
  let oldestUser = null;
  let youngestUser = null;
  let totalAge = 0;
  let count = 0;

  for (let i = 0; i < users.length; i++) {
    const userBirthDate = new Date(users[i].birthDate);
    const userAge = currentDate.getFullYear() - userBirthDate.getFullYear();
    totalAge += userAge;
    count++;

    if (!oldestUser || userBirthDate < new Date(oldestUser.birthDate)) {
      oldestUser = users[i];
    }
    if (!youngestUser || userBirthDate > new Date(youngestUser.birthDate)) {
      youngestUser = users[i];
    }
  }

  return {
    oldestUser,
    youngestUser,
    averageAge: totalAge / count,
  };
}

console.log(ageStats(users));
//////////////////////////////////////////////////////////////////////////////

// A function to get ave balance of users are above 18
function balanceAbove18(users) {
  const currentDate = new Date();
  let totalBalance = 0;
  let count = 0;

  for (let i = 0; i < users.length; i++) {
    const userBirthDate = new Date(users[i].birthDate);
    const userAge = currentDate.getFullYear() - userBirthDate.getFullYear();

    if (userAge >= 18) {
      totalBalance += users[i].balance;
      count++;
    }
  }

  return totalBalance / count;
}

console.log(balanceAbove18(users));
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
