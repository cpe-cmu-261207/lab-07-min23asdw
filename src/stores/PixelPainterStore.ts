import { Store } from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][];
  SelectColor: string;
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
export const createCanvas = (random: boolean, color: string = "#FFFFFF") => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      if (random) {
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        output[i].push(randomColor);
      }
      else output[i].push(color);
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createCanvas(false),
  SelectColor: "#000000",
})
