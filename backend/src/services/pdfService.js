const fs = require("fs");

const pdfParse = require("pdf-parse");

const pdfjsLib = require(
  "pdfjs-dist/legacy/build/pdf"
);

const extractTextFromPDF = async (
  filePath
) => {
  try {
    // Primary Parser
    const dataBuffer =
      fs.readFileSync(filePath);

    const pdfData =
      await pdfParse(dataBuffer);

    return pdfData.text;
  } catch (error) {
    console.log(
      "pdf-parse failed, using fallback parser..."
    );

    try {
      // Fallback Parser
      const data =
        new Uint8Array(
          fs.readFileSync(filePath)
        );

      const pdf =
        await pdfjsLib.getDocument({
          data,
        }).promise;

      let extractedText = "";

      for (
        let i = 1;
        i <= pdf.numPages;
        i++
      ) {
        const page =
          await pdf.getPage(i);

        const content =
          await page.getTextContent();

        const strings =
          content.items.map(
            (item) => item.str
          );

        extractedText +=
          strings.join(" ") + "\n";
      }

      return extractedText;
    } catch (fallbackError) {
      console.log(
        "Fallback parser failed:",
        fallbackError
      );

      throw new Error(
        "Unable to parse PDF file"
      );
    }
  }
};

module.exports = {
  extractTextFromPDF,
};