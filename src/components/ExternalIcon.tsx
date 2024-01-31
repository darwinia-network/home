type Color = "app-white" | "app-main" | "app-gray";

interface Props {
  width?: number;
  height?: number;
  color?: Color;
}

const mapping: Record<Color, string> = {
  "app-white": "#F2F3F5",
  "app-main": "#FF0083",
  "app-gray": "#8F8F8F",
};

export default function ExternalIcon({ width = 18, height = 18, color = "app-white" }: Props) {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        d="M384 256 384 320 659.2 320 230.4 742.4 281.6 793.6 704 364.8 704 640 768 640 768 256Z"
        fill={mapping[color]}
      />
    </svg>
  );
}
