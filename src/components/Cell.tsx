import { PixelPainterStore } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()

  const dragDraw = () => {
    PixelPainterStore.update(state => { state.canvas[y][x] = state.SelectColor })
  }


  return (
    <td className="w-6 h-6 cursor-pointer"
      draggable="true" onDragOver={dragDraw} onClick={dragDraw}
      style={{ backgroundColor: state.canvas[y][x] }
      }>
    </td >
  )
}

export default Cell
