import { FC } from 'react';
import { LogRenderer } from '../../util';
import { DBManager, StudentController, StudentView } from './MVC';

const MVCPage: FC = () => {
  // fetch student record based on his roll number from the database
  const db = new DBManager();
  const model = db.retrieveStudentFromDatabase();

  // create a view to write student details to logger
  const view = new StudentView();

  const controller = new StudentController(model, view);
  controller.updateView();

  // update model data
  controller.StudentName = 'John';
  controller.StudentNumber = 15;
  controller.updateView();

  return <LogRenderer messages={view.logger.logs} />;
};

export default MVCPage;
