declare module "react-minimal-pie-chart" {
  export class PieChart {
    data: {
      title: string;
      value: number;
      color: string;
    }[];
    constructor(data: Data) {
      this.data = data;
    }
  }
  interface LabelProps {
    key: string;
    x: number;
    y: number;
    dx: number;
    dy: number;
    textAnchor: string;
    data: {
      // props.data array extended with:
      degrees: number;
      percentage: number;
    }[];
    dataIndex: number;
    color: string;
    style: { [key: string]: string | number };
  }
}
