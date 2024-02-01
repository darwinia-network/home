type Fill = "main" | "white" | "black";

interface Props {
  fill: Fill;
  width?: number;
  height?: number;
}

const dMapping: Record<Fill, string> = {
  main: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24ZM9.5 5V8.65152L13.5832 11.621L9.5 14.4899V18.0989L17.1484 12.6085V10.7443L9.5 5Z",
  white:
    "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9 5V8.65152L13.0832 11.621L9 14.4899V18.0989L16.6484 12.6085V10.7443L9 5Z",
  black:
    "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24ZM9.5 5V8.65152L13.5832 11.621L9.5 14.4899V18.0989L17.1484 12.6085V10.7443L9.5 5Z",
};

const fillMapping: Record<Fill, string> = {
  main: "#FF0083",
  white: "#F2F3F5",
  black: "black",
};

export default function RightArrowRound({ fill, width = 24, height = 24 }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d={dMapping[fill]} fill={fillMapping[fill]} />
    </svg>
  );
}
