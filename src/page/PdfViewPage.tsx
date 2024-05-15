import { PDFViewer } from "@react-pdf/renderer";
import { CvPdfView } from "components/CvPdfView/CvPdfView";

export const PdfViewPage = () => {
  return (
    <PDFViewer>
      <CvPdfView />
    </PDFViewer>
  );
};
