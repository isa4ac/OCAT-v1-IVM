/* eslint-disable sort-keys */
const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  let catScore = 0;
  if (assessment.prevCJS === `yes`) {
    catScore += 1;
  }
  if (assessment.CVC === `yes`) {
    catScore += 1;
  }
  if (assessment.CVH === `yes`) {
    catScore += 1;
  }
  if (assessment.PWWD === `no`) {
    catScore += 1;
  }
  if (assessment.Hisses === `yes`) {
    catScore += 1;
  }

  const newDate = new Date();

  await Assessment.create({
    instrumentType: 2, // TODO: remove hard coded value
    score: catScore,
    riskLevel: `hard-coded risk level`, // TODO: remove hard coded value
    catName: assessment.catName,
    catDateOfBirth: assessment.DOB,
    createdAt: newDate.getDate(),
    updatedAt: newDate.getDate(),
    deletedAt: null,
  });
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database

  const assessments = Assessment.findAll();

  return assessments;
};
