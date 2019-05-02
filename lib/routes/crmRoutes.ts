import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";
import * as path from "path";
export class Routes {   
    public contactController: ContactController = new ContactController();
 
    public routes(app : any): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {
            //Serve index of frontend          
            res.sendFile(path.resolve(__dirname + "/../../index.html"));
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