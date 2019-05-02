import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import * as path from "path";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb';

    constructor() {
        this.app = express();
        this.config();   
        this.routePrv.routes(this.app);    
        this.mongoSetup();   
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        //Serve frontend static files. TODO: Use a cleaner solution
        this.app.use("/dist", express.static(path.resolve(__dirname + "/../dist")));
        this.app.use("/node_modules", express.static(path.resolve(__dirname + "/../node_modules")));
    }

    private mongoSetup(): void{
        (<any> mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }
}

export default new App().app;