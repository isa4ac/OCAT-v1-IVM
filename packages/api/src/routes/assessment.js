const { AssessmentService } = require(`../microservices`);
const { ResponseHandler } = require(`../utils`);

const { Router } = require(`express`);

const assessmentRouter = Router();

assessmentRouter.post(
  `/addAssessment`,
  async (req, res, next) => {
    try {
      const { assessment } = req.body;

      // verify that your data is making it here to the API by using console.log(assessment);
      console.log(assessment);
      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters
      await AssessmentService.submit(assessment);
      ResponseHandler(
        res,
        `Submitted assessment`,
        {},
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.get(
  `/getAssessments`,
  async (req, res, next) => {
    try {
      // verify that your data is making it here to the API by using console.log();
      // call the AssessmentService.getList function from packages/api/src/microservices/Assessment-Service.js
      const assessments = await AssessmentService.getList();

      console.log(assessments);

      ResponseHandler(
        res,
        `Fetched assessments`,
        { assessments },
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.delete(
  `/deleteAssessment/:id`,
  async (req, res, next) => {
    try {
      const { id } = req.params;

      // verify that your data is making it here to the API by using console.log(assessment);
      console.log(id);
      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters
      await AssessmentService.remove(id);
      ResponseHandler(
        res,
        `Assessment deleted`,
        {},
      );
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { assessmentRouter };
