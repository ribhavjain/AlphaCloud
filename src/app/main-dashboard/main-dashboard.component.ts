import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

export class Task {
  constructor(
    public task_id: number,
    public org_id: number,
    public email: string,
    public title: string,
    public name: string,
    public language: string,
    public summary: string,
    public category: string,
    public due_date: Date,
    public location: string) { }
}

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  tasks:any = [];
  selectedTask;

  filterLang:any = null;
  filterDate:any = null;
  filterCat:any = null;
  hasFilters:boolean = false;

  lat: number = 33.166040;
  lng: number = -117.337930;
  area_radius: number = 8000;  

  constructor(private http:HttpClient, private router:Router) { 
    let org_id = 1
    this.http.post('/getAllTasks', {'org_id': org_id}).subscribe(res => {
      for(var i = 0; i < Object.entries(res).length; i++){
        let task = res[i];
        this.tasks.push(new Task(task['_id'], task['orgID'], task['email'], task['task_title'], 'Mack', task['language'], task['task_summary'], 'Open', new Date(task['post_date']), task['address']))
      }
      // console.log(this.tasks)

      // let task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?task.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summarytask.summaryas', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);
      // task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);
      // task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);task = new Task(1, 1, 'bob@gmail.com', 'Hola', 'Juan', 'Spanish', '?', 'Open', new Date(), 'location');
      // // console.log(task);
      // this.tasks.push(task);


      this.tasks.sort((a, b) => new Date(b.due_date).getTime() - new Date(a.due_date).getTime());

    })
  }
  ngOnInit() {
   
    $('#lang-drop').dropdown({
      clearable: true,
      useLabels: false,
      onChange: (value, text, $choice) =>{
        // console.log(value);
        // console.log(text);
        // console.log($choice);
        this.onSelectLang(value);
      }
    });
    // https://github.com/mdehoog/Semantic-UI-Calendar
    var today = new Date();
    $('#date-drop').calendar({
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
      onChange: (value, text, choice) => {
        // console.log(value);
        // console.log(text);
        this.onSelectDate(text, value);
      },
    })
    $('#category-drop').dropdown({
      clearable: true,
      useLabels: false,
      onChange: (value, text, $choice) =>{
        // console.log(value);
        // console.log(text);
        // console.log($choice);
        this.onSelectCat(value);
      }
    });
  }
  
  
  
  logout() {
    this.router.navigate(['']);
    // this.http.post('/logout', {}).subscribe((result) => {
    //   this.router.navigate(['']);
    // })
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
    this.router.navigate(['/task', task['task_id']])
  }
  onSelectLang(lang: string): void {
    if (lang == this.filterLang){
      this.filterLang = null;
      $('#lang-drop').dropdown('clear');
      $('#lang-drop').dropdown('set text', "Language");
    } else {
      this.filterLang = lang;
    }
    this.checkFilters();
  }
  onSelectDate(date: string, actual: object): void {
    if (actual == this.filterDate){
      this.filterDate = null;
      $('#date-drop').find('.text').html("Date");
    } else {
      this.filterDate = actual;
      $('#date-drop').calendar('focus');
      // $('#date-drop').calendar('popup', "hide");
      $('#date-drop').find('.text').html(date);
    }
    this.checkFilters();
  }
  onSelectCat(cat: string): void {
    // console.log(cat);
    // console.log(this.filterCat);
    if (cat == this.filterCat){
      this.filterCat = null;
      $('#category-drop').dropdown('clear');
      $('#category-drop').dropdown('set text', "Category");

    } else {
      this.filterCat = cat;
    }
    this.checkFilters();
  }
  clearFilters(): void {
    this.filterCat = null;
    this.filterDate = null;
    this.filterLang = null;
    

    $('#lang-drop').dropdown('clear');
    $('#lang-drop').dropdown('set text', "Language");
    $('#category-drop').dropdown('clear');
    $('#category-drop').dropdown('set text', "Category");
    $('#date-drop').calendar('popup', "hide");
    $('#date-drop').calendar('clear');
    $('#date-drop').find('.text').html("Date");
    this.hasFilters = false;
  }
  checkFilters(): void{
    this.hasFilters = (this.filterCat != null || this.filterDate != null || this.filterLang != null);
  }

}
