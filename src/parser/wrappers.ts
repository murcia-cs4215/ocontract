interface Wrapper<T> {
  unwrap(): T;
}

export class StringWrapper implements Wrapper<string> {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  public unwrap(): string {
    return this.value;
  }
}
