interface StringUtils {
    trimString(str: string): string;
    removeSpaces(str: string): string;
    uppercaseFirstLetter(str: string): string;
  }
  
  interface ArrayUtils {
    removeDuplicates(arr: any[]): any[];
    flattenArray(arr: any[]): any[];
    shuffleArray(arr: any[]): any[];
  }
  
  interface ObjectUtils {
    mergeObjects(obj1: object, obj2: object): object;
    removeObjectProperty(obj: object, prop: string): object;
    hasOwnProperty(obj: object, prop: string): boolean;
  }
  
  interface MathUtils {
    addNumbers(a: number, b: number): number;
    subtractNumbers(a: number, b: number): number;
    multiplyNumbers(a: number, b: number): number;
  }