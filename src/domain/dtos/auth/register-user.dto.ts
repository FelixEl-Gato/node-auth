


export class RegisterUserDto {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role: string[],
    public img?: string,
  ) { }

  static create(object: {[key: string]: any}): [string?, RegisterUserDto?] {

    return [];
  }
}