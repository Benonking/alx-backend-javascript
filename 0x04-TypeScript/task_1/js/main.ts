interface Teacher {
  readonly firstName: string;
  readonly lastName:string;
  fullTimeEmployee: boolean;
  yearsOfExpereince?: number;
  location:string;
  [property: string]: any;
}
