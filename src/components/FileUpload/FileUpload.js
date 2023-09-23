import { useEffect, useRef, useState } from "react";
import './FileUpload.css'
import Drop from "./Drop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Document, Page, pdfjs } from "react-pdf";

function FileUpload({ setPdfUrl, pdfUrl, setDeletePopupView }) {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function blobToURL(blob) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                const base64data = reader.result;
                resolve(base64data);
            };
        });
    }


    const [pdf, setPdf] = useState(pdfUrl);
    const [pageNum, setPageNum] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageDetails, setPageDetails] = useState(null);


    return (
        <>
            {!pdf ? (
                <Drop
                    onLoaded={async (files) => {
                        const URL = await blobToURL(files[0]);
                        setPdf(URL);
                        setPdfUrl(URL);
                    }}
                />
            ) : null}
            {pdf ? (
                <div>
                    <Document
                        file={pdf}
                        onLoadSuccess={(data) => {
                            setTotalPages(data.numPages);
                        }}
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
                    <div className="filename">
                        My Resume.pdf
                        <FontAwesomeIcon icon={faTrash} color="red" onClick={() => setDeletePopupView(true)} />
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default FileUpload;
