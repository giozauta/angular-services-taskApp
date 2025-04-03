import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';
//როცა გვინდა რომ injectable არ გამოვიყენოთ და ისე გადავცედ სერვისები 
// bootstrapApplication(AppComponent,{
//     providers:[TasksService]
// }).catch((err) => console.error(err));

// ეს უფრო გრძელი გზაა:აქ უნდა შექმნა ტოკენი და ამტოკენის სახელით გამოიიყენო მერე სერვისი
//  და აგრეთვე კომპონენტებსი უკვე inject(TasksServiceToken) ჩაწერ 
export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
bootstrapApplication(AppComponent,{
    providers:[{provide:TasksServiceToken,useClass:TasksService}]
}).catch((err) => console.error(err));



// bootstrapApplication(AppComponent).catch((err) => console.error(err));
