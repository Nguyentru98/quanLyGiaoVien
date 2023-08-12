import {Router} from "express";
import teacherController from "../controller/teacherController";
import auth from "../middleware/jwt";

const teacherRouter = Router();
teacherRouter.use(auth)
teacherRouter.get('/', teacherController.findAll);
teacherRouter.post('/add', teacherController.add);
teacherRouter.delete('/delete/:id', teacherController.delete);
teacherRouter.put('/:id', teacherController.update);
teacherRouter.get('/:id', teacherController.findById);

export default teacherRouter;
