
export class TaskEntry {
    constructor(
        public task_title: string,
        public task_summary: string,
        public address: string,
        public language: string,
        public date_to_complete: Date,
        public post_date: number,
        public email: string,
        public orgID: number,
      ) {  }
}
