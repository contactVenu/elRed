import { useRef, useState } from "react";
import './PdfView.css'
import { Document, Page } from "react-pdf";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons"

function PdfView({ myResume, setPdfView }) {

    const [pageNum, setPageNum] = useState(0);
    const [pageDetails, setPageDetails] = useState(null);

    return (
        <>
            <div className="pdfView">
                <div className="head">
                    <span>My_Resume.pdf</span>
                    <FontAwesomeIcon icon={faClose} onClick={() => setPdfView(false)} />
                </div>
                <Document
                    file={myResume}
                >
                    <Page
                        pageNumber={pageNum + 1}
                        width={800}
                        height={1200}
                        onLoadSuccess={(data) => {
                            setPageDetails(data);
                        }}
                    />
                </Document>
            </div>
        </>
    );
}

export default PdfView;
