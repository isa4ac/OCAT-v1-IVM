import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { formState: { errors }, handleSubmit, register } = useForm();
  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <Form onSubmit={handleSubmit(onSubmit)}>
    <div style={{ textAlign: `center` }}>
      <label htmlFor="catName">Cat's name</label> <br />
      <input id="catName" type="text" placeholder="Whiskers" {...register(`catName`, { required: true })} /> <br />
      {errors.catName && <p style={{ color: `red` }}>Cat's name is required.</p>}
      <label htmlFor="DOB">Cat's date of birth</label> <br />
      <input id="DOB" type="date" {...register(`DOB`, { required: true })} /> <br />
      {errors.DOB && <p style={{ color: `red` }}>Please enter the cat's date of birth.</p>}
      <label htmlFor="prevCJS">Previous contact with the Cat Judicial System?</label> <br /> {/* CJS = Cat Judicial System */}
      <label>
        <div>
          <input name="prevCJS" id="prevCJS" type="radio" value="no" {...register(`prevCJS`, { required: true })} />
          No
        </div>
      </label>
      <br />
      <label>
        <div>
          <input name="prevCJS" id="prevCJS" type="radio" value="yes" {...register(`prevCJS`, { required: true })} />
          Yes
        </div>
      </label>
      <br />
      {errors.prevCJS?.type === `required` && <p style={{ color: `red` }}>Please select one.</p>}
      <label htmlFor="CVC">Physical altercations with other cats?</label> <br /> {/* CVC = Cat vs Cat */}
      <label>
        <div>
          <input name="CVC" id="CVC" type="radio" value="no" {...register(`CVC`, { required: true })} />
          0-3 altercations
        </div>
      </label>
      <br />
      <label>
        <div>
          <input name="CVC" id="CVC" type="radio" value="yes" {...register(`CVC`, { required: true })} />
          3+ altercations
        </div>
      </label>
      <br />
      {errors.CVC?.type === `required` && <p style={{ color: `red` }}>Please select one.</p>}
      <label htmlFor="CVH">Physical altercations with owner? (scratching, biting, etc...)</label> <br /> {/* CVH = Cat vs Human */}
      <label>
        <div>
          <input name="CVH" id="CVH" type="radio" value="yes" {...register(`CVH`, { required: true })} />
          10+ altercations
        </div>
      </label>
      <br />
      <label>
        <div>
          <input name="CVH" id="CVH" type="radio" value="no" {...register(`CVH`, { required: true })} />
          0-10 altercations
        </div>
      </label>
      <br />
      {errors.CVH?.type === `required` && <p style={{ color: `red` }}>Please select one.</p>}
      <label htmlFor="PWWD">Plays well with dogs?</label> <br /> {/* PWWD = Plays well with dogs */}
      <label>
        <div>
          <input name="PWWD" id="PWWD" type="radio" value="yes" {...register(`PWWD`, { required: true })} />
          10+ altercations
        </div>
      </label>
      <br />
      <label>
        <div>
          <input name="PWWD" id="PWWD" type="radio" value="no" {...register(`PWWD`, { required: true })} />
          0-10 altercations
        </div>
      </label>
      <br />
      {errors.PWWD?.type === `required` && <p style={{ color: `red` }}>Please select one.</p>}
      <label htmlFor="Hisses">Hisses at strangers?</label> <br />
      <label>
        <div>
          <input name="Hisses" id="Hisses" type="radio" value="yes" {...register(`Hisses`, { required: true })} />
          10+ altercations
        </div>
      </label>
      <br />
      <label>
        <div>
          <input name="Hisses" id="Hisses" type="radio" value="no" {...register(`Hisses`, { required: true })} />
          0-10 altercations
        </div>
      </label>
      <br />
      {errors.Hisses?.type === `required` && <p style={{ color: `red` }}>Please select one.</p>}
      <br /> <Button variant="primary" type="submit">Submit</Button>
    </div>
  </Form>;
};
