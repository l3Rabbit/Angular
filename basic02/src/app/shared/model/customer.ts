export class Customer {
  public id: number;
  public code: string;
  public firstname: string;
  public lastname: string;
  public get fullname(): string {
    return this.firstname + ' ' + this.lastname;
  }

  constructor() {
    this.id = 0 ;
    this.firstname = '';
    this.lastname = '';
    this.code = '';
  }
}
