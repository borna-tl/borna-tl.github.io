function displayPDF(pdfUrl, containerId) {
  const container = document.getElementById(containerId);
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";

  // Initialize PDF.js
  const loadingTask = pdfjsLib.getDocument(pdfUrl);

  loadingTask.promise.then(function (pdfDoc) {
    // Initialize PDF viewer
    const pdfViewer = new pdfjsViewer.PDFViewer({
      container: container,
    });

    pdfViewer.setDocument(pdfDoc);

    // Add navigation controls
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    prevButton.addEventListener("click", function () {
      pdfViewer.currentPageNumber -= 1;
    });

    nextButton.addEventListener("click", function () {
      pdfViewer.currentPageNumber += 1;
    });
  });
}
