interface PaperData {
  id: string;
  image: string;
  thumbnail: string;
  authors: string[];
  tags: string[];
  title: string;
  fullPath: string;
  contents: string[];
}

const data: PaperData[] = [];

export function usePapersData() {
  return data;
}

export function usePaperData(id: string) {
  return data.find((d) => d.id === id);
}
