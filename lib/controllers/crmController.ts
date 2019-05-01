import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);
export class ContactController{

    public addNewContact (req: Request, res: Response) {                
            let newContact = new Contact(req.body);
        
            newContact.save((err, contact) => {
                if(err){
                    res.send(err);
                }    
                res.json(contact);
            });
    }
    /**
     * View single contact
     * GET method
     * @param req 
     * @param res 
     */

    public getContactWithID (req: Request, res: Response) {           
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    /**
     * PUT method
     * @param req 
     * @param res 
     */
    public updateContact (req: Request, res: Response) {           
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact (req: Request, res: Response) {           
        Contact.remove({ _id: req.params.contactId }, (err : any) => { // removed , contact : any because it was causing a compilation error
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
    public getContacts (req: Request, res: Response) {           
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
}