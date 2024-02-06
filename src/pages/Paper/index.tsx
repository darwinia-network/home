import { Navigate, useParams } from "react-router-dom";
import { usePaperData } from "../../data/paper";

export default function Paper() {
  const params = useParams();
  const paperData = usePaperData(params.paperId ?? "");

  return params.paperId && paperData ? <div></div> : <Navigate to="/not-found" replace />;
}
