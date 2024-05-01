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

  const today = new Date();

  await Assessment.create({
    instrumentType: 2,
    score: catScore,
    riskLevel: catScore > 2 ? `High-Risk` : `Low-Risk`, // if cat's score is higher than 2, it is high-risk
    catName: assessment.catName,
    catDateOfBirth: assessment.DOB,
    createdAt: today.getDate(),
    updatedAt: today.getDate(),
    deletedAt: null,
  });
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
};

exports.getList = async () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database

  const assessments = await Assessment.findAll();

  return assessments.map(assessment => assessment.get({ plain: true }));
};
