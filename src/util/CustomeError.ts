class CustomError extends Error {
  details: any;

  constructor(message: string, details: any) {
    super(message);
    this.details = details;

    // Set the prototype explicitly, required for custom Error classes in TypeScript
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
