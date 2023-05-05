let checkbox: any;

checkbox = "Next Level Web Application";

(checkbox as string).length;
<string>checkbox.length;

function kgToGram(param: number | string): string | number | undefined {
  if (typeof param === "number") {
    return param * 1000;
  }
  if (typeof param === "string") {
    const result = parseInt(param, 10);
    return result;
  }
  return undefined;
}

kgToGram(1000) as number;
kgToGram("1000") as string;

<number>kgToGram(1000.5);
<string>kgToGram("1000.5");
