import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {   
    public contactController: ContactController = new ContactController();
 
    public routes(app : any): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!! base'
            })
        })

        // Contact
        app.route('/contact')
        // GET endpoint
        .get(this.contactController.getContacts)
        .post(this.contactController.addNewContact);   

        // Contact detail
        app.route('/contact/:contactId')
        // edit specific contact
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)
    }
}